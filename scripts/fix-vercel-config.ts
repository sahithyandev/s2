import { Glob } from "bun";

const markdownFilesGlob = new Glob("**/01-*.md");

(async () => {
	const vercelConfigFile = Bun.file("vercel.json");
	let config = undefined;
	if (await vercelConfigFile.exists()) {
		config = JSON.parse(await vercelConfigFile.text());
	} else {
		config = {};
	}
	if (config.redirects === undefined) {
		config.redirects = [];
	}
	const existingSources = [];
	for (const redirect of config.redirects) {
		existingSources.push(redirect.source);
	}
	for await (const file of markdownFilesGlob.scan("src/content/docs")) {
		const source = "/".concat(file.split("/").slice(0, -1).join("/"));
		const existingSourceIndex: number = existingSources.indexOf(source);
		if (existingSourceIndex !== -1) {
			existingSources[existingSourceIndex] = "";
			config.redirects[existingSourceIndex] = {
				source,
				destination: "/".concat(file.replace("01-", "").replace(".md", "")),
			};
		} else {
			config.redirects.push({
				source,
				destination: "/".concat(file.replace("01-", "").replace(".md", "")),
			});
		}
	}
	await Bun.write(vercelConfigFile, JSON.stringify(config, null, 2));
})();
