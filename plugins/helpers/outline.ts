/*
 * The following code is adapted from asciidoctor-web-pdf for HTML documents, available at:
 * https://github.com/ggrossetie/asciidoctor-web-pdf/blob/main/lib/outline.js
 *
 * Copyright (c) 2018 Guillaume Grossetie
 * Licensed under the MIT License.
 */

import { decode } from "html-entities";
import type { PDFContext, PDFDocument, PDFRef } from "pdf-lib";
import { PDFArray, PDFDict, PDFHexString, PDFName, PDFNumber } from "pdf-lib";
import type { DictMap } from "pdf-lib/src/core/objects/PDFDict";
import type { Page } from "puppeteer-core";

export interface RootOutlineNode {
	children: (OutlineNode | never)[];
	depth: number;
	parent?: OutlineNode | RootOutlineNode;
}

export interface OutlineNode {
	title: string;
	destination: string;
	children: (OutlineNode | never)[];
	depth: number;
	parent?: OutlineNode | RootOutlineNode;
	italic?: boolean;
	bold?: boolean;
	color?: number[];
}

export type PDFOutlineItem = OutlineNode;

export interface OutlineRef {
	title: string;
	destination: string;
	children: (OutlineRef | never)[];
	depth: number;
	ref: PDFRef;
	parentRef: PDFRef;
	italic?: boolean;
	bold?: boolean;
	color?: number[];
}

// export function parseOutline(tagsToProcess: Element[], tags: string[]) {
// 	const root: RootOutlineNode = { children: [], depth: -1, parent: undefined };
// 	let currentOutlineNode = root;

// 	const linkHolder = document.createElement("div");
// 	const body = document.querySelector("body");
// 	linkHolder.style.display = "none";
// 	body?.insertBefore(linkHolder, body.firstChild);

// 	while (tagsToProcess.length > 0) {
// 		const tag = tagsToProcess.pop()!;
// 		const orderDepth = tags.indexOf(tag.tagName.toLowerCase());
// 		const dest = encodeURIComponent(tag.id);

// 		// Add to link holder to register a destination
// 		const hiddenLink = document.createElement("a");
// 		hiddenLink.href = `#${dest}`;
// 		linkHolder.appendChild(hiddenLink);

// 		if (orderDepth < currentOutlineNode.depth) {
// 			currentOutlineNode = currentOutlineNode.parent!;
// 			tagsToProcess.push(tag);
// 		}
// 		else {
// 			const newNode: OutlineNode = {
// 				// https://stackoverflow.com/questions/57551589/property-innertext-does-not-exist-on-type-element
// 				title: (<HTMLElement>tag).innerText.trim(),
// 				destination: dest,
// 				children: [],
// 				depth: orderDepth,
// 				parent: undefined,
// 			};
// 			if (orderDepth === currentOutlineNode.depth) {
// 				if (currentOutlineNode.parent) {
// 					newNode.parent = currentOutlineNode.parent;
// 					currentOutlineNode.parent.children.push(newNode);
// 				}
// 				else {
// 					newNode.parent = currentOutlineNode;
// 					currentOutlineNode.children.push(newNode);
// 				}
// 				currentOutlineNode = newNode;
// 			}
// 			else if (orderDepth > currentOutlineNode.depth) {
// 				newNode.parent = currentOutlineNode;
// 				currentOutlineNode.children.push(newNode);
// 				currentOutlineNode = newNode;
// 			}
// 		}
// 	}

// 	const stripParentProperty = (node: RootOutlineNode) => {
// 		node.parent = undefined;
// 		for (const child of node.children)
// 			stripParentProperty(child);
// 	};
// 	stripParentProperty(root);
// 	return root.children;
// }

/**
 * Format the outline container selector by removing extra spaces and ensuring trailing space.
 *
 * @param {string} outlineContainerSelector - The selector for the outline container.
 * @returns {string} The formatted selector.
 */
export function formatOutlineContainerSelector(
	outlineContainerSelector: string,
) {
	// If the selector is empty, return an empty string.
	if (!outlineContainerSelector) return "";

	// Split the selector string by whitespace.
	const selectors = outlineContainerSelector.split(/\s+/);

	// Filter out empty selectors.
	const validSelectors = selectors.filter((selector) => selector);

	// Join the valid selectors with spaces and add a trailing space.
	const formattedSelector = `${validSelectors.join(" ")} `;

	return formattedSelector;
}

/**
 * Gets the outline of a webpage using a headless browser.
 * @param page - The page to evaluate.
 * @param tags - An array of tag names to use for the outline.
 * @param outlineContainerSelector - Outline Container Selector
 * @returns A Promise that resolves to an array of top-level OutlineNode objects representing the parsed outline.
 */
export async function getOutline(
	page: Page,
	tags: string[],
	outlineContainerSelector = "",
) {
	const preSelector = formatOutlineContainerSelector(outlineContainerSelector);
	return await page.evaluate(
		(tags, outlineSelector) => {
			const tagsToProcess = Array.from(
				document.querySelectorAll(outlineSelector),
			).reverse();
			const root: RootOutlineNode = {
				children: [],
				depth: -1,
				parent: undefined,
			};
			let currentOutlineNode = root;

			const linkHolder = document.createElement("div");
			const body = document.querySelector("body");
			linkHolder.style.display = "none";
			body?.insertBefore(linkHolder, body.firstChild);

			while (tagsToProcess.length > 0) {
				const tag = tagsToProcess.pop();
				if (!tag) break;
				const orderDepth = tags.indexOf(tag.tagName.toLowerCase());
				const dest = encodeURIComponent(tag.id);

				// Add to link holder to register a destination
				const hiddenLink = document.createElement("a");
				hiddenLink.href = `#${dest}`;
				linkHolder.appendChild(hiddenLink);

				if (orderDepth < currentOutlineNode.depth) {
					if (currentOutlineNode.parent) {
						currentOutlineNode = currentOutlineNode.parent;
					}
					tagsToProcess.push(tag);
				} else {
					const newNode: OutlineNode = {
						// http://perfectionkills.com/the-poor-misunderstood-innerText/
						title: tag.textContent?.trim() ?? "",
						destination: dest,
						children: [],
						depth: orderDepth,
						parent: undefined,
					};
					if (orderDepth === currentOutlineNode.depth) {
						if (currentOutlineNode.parent) {
							newNode.parent = currentOutlineNode.parent;
							currentOutlineNode.parent.children.push(newNode);
						} else {
							newNode.parent = currentOutlineNode;
							currentOutlineNode.children.push(newNode);
						}
						currentOutlineNode = newNode;
					} else if (orderDepth > currentOutlineNode.depth) {
						newNode.parent = currentOutlineNode;
						currentOutlineNode.children.push(newNode);
						currentOutlineNode = newNode;
					}
				}
			}

			const stripParentProperty = (node: RootOutlineNode) => {
				node.parent = undefined;
				for (const child of node.children) stripParentProperty(child);
			};
			stripParentProperty(root);
			return root.children;
		},
		tags,
		tags.map((titleItem) => `${preSelector} ${titleItem}`).join(","),
	);
}

/**
 * Adds PDF references to each outline item in a nested outline tree.
 * @param outlines - The nested outline tree to add references to.
 * @param context - The PDF context to use.
 * @param parentRef - The reference of the parent outline item.
 * @returns An array of outline items with references.
 */
function addRefsForOutlineItems(
	outlines: OutlineNode[],
	context: PDFContext,
	parentRef: PDFRef,
): OutlineRef[] {
	return outlines.map((item) => {
		const itemRef = context.nextRef();
		return {
			...item,
			ref: itemRef,
			parentRef,
			children: addRefsForOutlineItems(item.children, context, itemRef),
		};
	});
}

/**
 * Counts the total number of outline items in a nested outline tree.
 * @param outlines - The nested outline tree to count the items of.
 * @returns The total number of outline items in the tree.
 */
function countChildrenOfOutline(outlines: OutlineNode[]): number {
	let count = 0;
	for (const item of outlines) {
		++count;
		count += countChildrenOfOutline(item.children);
	}
	return count;
}

/**
 * Builds the PDF objects for a nested outline tree with references.
 * @param outlinesWithRef - The nested outline tree with references.
 * @param context - The PDF context to use.
 */
function buildPdfObjectsForOutline(
	outlinesWithRef: OutlineRef[],
	context: PDFContext,
) {
	for (const [i, item] of outlinesWithRef.entries()) {
		const prev = outlinesWithRef[i - 1];
		const next = outlinesWithRef[i + 1];

		const pdfObject: DictMap = new Map([]);
		pdfObject.set(
			PDFName.of("Title"),
			PDFHexString.fromText(decode(item.title)),
		);
		pdfObject.set(PDFName.of("Dest"), PDFName.of(item.destination));
		pdfObject.set(PDFName.of("Parent"), item.parentRef);

		pdfObject.set(
			PDFName.of("F"),
			PDFNumber.of((item.italic ? 1 : 0) | (item.bold ? 2 : 0)),
		);

		if (Array.isArray(item.color)) {
			// outline text color, three numbers in the range 0.0 to 1.0
			const pdfArr = PDFArray.withContext(context);
			pdfArr.push(PDFNumber.of(item.color[0] ?? 0));
			pdfArr.push(PDFNumber.of(item.color[1] ?? 0));
			pdfArr.push(PDFNumber.of(item.color[2] ?? 0));
			pdfObject.set(PDFName.of("C"), pdfArr);
		}

		if (prev) pdfObject.set(PDFName.of("Prev"), prev.ref);

		if (next) pdfObject.set(PDFName.of("Next"), next.ref);

		if (item.children.length > 0) {
			pdfObject.set(PDFName.of("First"), item.children[0].ref);
			pdfObject.set(
				PDFName.of("Last"),
				item.children[item.children.length - 1].ref,
			);
			pdfObject.set(
				PDFName.of("Count"),
				PDFNumber.of(countChildrenOfOutline(item.children)),
			);
		}

		context.assign(item.ref, PDFDict.fromMapWithContext(pdfObject, context));

		buildPdfObjectsForOutline(item.children, context);
	}
}

/**
 * Generates warnings for each missing destination in a nested outline tree.
 * @param layer - The nested outline tree to generate warnings for.
 * @param pdfDoc - The PDF document to generate warnings for.
 */
function generateWarningsAboutMissingDestinations(
	layer: OutlineNode[],
	pdfDoc: PDFDocument,
) {
	const dests = pdfDoc.context.lookup(
		pdfDoc.catalog.get(PDFName.of("Dests")),
		PDFDict,
	);
	// Dests can be undefined if the PDF wasn't successfully generated (for instance if Paged.js threw an exception)
	if (dests) {
		const validDestinationTargets = dests
			.entries()
			.map(([key]) => key.asString());
		for (const item of layer) {
			if (
				item.destination &&
				!validDestinationTargets.includes(`/${item.destination}`)
			)
				console.warn(
					`Unable to find destination "${item.destination}" while generating PDF outline.`,
				);

			generateWarningsAboutMissingDestinations(item.children, pdfDoc);
		}
	}
}

/**
 * Sets the outlines of a PDF document from a nested outline tree.
 * @param pdfDoc - The PDF document to set outlines on.
 * @param outlines - The nested outline tree to use as outlines.
 * @param [enableWarnings=false] - Whether to generate warnings for missing destinations.
 * @returns The PDF document with outlines set.
 */

export async function setOutline(
	pdfDoc: PDFDocument,
	outlines: OutlineNode[],
	enableWarnings = false,
): Promise<PDFDocument> {
	const context = pdfDoc.context;
	const rootOutlineRef = context.nextRef();

	if (!outlines.length) return pdfDoc;

	if (enableWarnings)
		generateWarningsAboutMissingDestinations(outlines, pdfDoc);

	const outlinesWithRef = addRefsForOutlineItems(
		outlines,
		context,
		rootOutlineRef,
	);
	buildPdfObjectsForOutline(outlinesWithRef, context);

	const outlineObject: DictMap = new Map([]);
	outlineObject.set(PDFName.of("Type"), PDFName.of("Outlines"));
	outlineObject.set(PDFName.of("First"), outlinesWithRef[0].ref);
	outlineObject.set(
		PDFName.of("Last"),
		outlinesWithRef[outlinesWithRef.length - 1].ref,
	);
	outlineObject.set(
		PDFName.of("Count"),
		PDFNumber.of(countChildrenOfOutline(outlinesWithRef)),
	);

	context.assign(
		rootOutlineRef,
		PDFDict.fromMapWithContext(outlineObject, context),
	);

	pdfDoc.catalog.set(PDFName.of("Outlines"), rootOutlineRef);
	return pdfDoc;
}

export function formatOutlines(
	outlineNodes: Array<OutlineNode>,
	h1Suffix: string,
) {
	outlineNodes.shift(); // remove first
	for (let i = 0; i < outlineNodes.length; i++) {
		outlineNodes[i].title = outlineNodes[i].title.concat(h1Suffix);
	}
	return outlineNodes;
}
