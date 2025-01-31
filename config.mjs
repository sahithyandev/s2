import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

export const SITE_TITLE = "Sahithyan's S2";
export const SITE_HREF = "https://s2.sahithyan.dev";
export const CREATE_E_BOOK = process.env.CREATE_E_BOOK || false;

/**
 * @type {Record<string, string>}
 */
export const MODULE_CODES = {
	"Program Construction": "CS1040",
	"Theory of Electricity": "EE2094",
	"Methods of Mathematics": "MA1024",
	"Computer Organization and Digital Design": "CS1050",
	"Data Structures & Algorithms": "CS2023",
	"Communication Skills": "CS2953",
};

export const BOOK_CONFIG = {
	description:
		"This e-book is a complete compilation of all the modules I studied during my 1st semester of Engineering. It is designed to serve as a well-organized and accessible resource for students, offering a streamlined way to review key concepts and materials.\n\nWhile all of this content is freely available on the website, this e-book provides a convenient, offline format for easy reference. By purchasing this e-book, you are not only supporting my work but also helping me continue to share educational resources for students like you.",
};

/**
 * @type {Parameters<typeof starlight>[0]["head"]}
 */
const STARLIGHT_CONFIG_HEAD = [
	{
		tag: "link",
		attrs: {
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
	},
	{
		tag: "link",
		attrs: {
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: true,
		},
	},
	{
		tag: "link",
		attrs: {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
		},
	},
];

if (process.env.NODE_ENV === "production") {
	STARLIGHT_CONFIG_HEAD.push({
		tag: "script",
		attrs: {
			defer: true,
			"data-domain": "s2.sahithyan.dev",
			src: "https://analytics.sahithyan.dev/js/script.js",
		},
	});
}

/**
 * @type {Parameters<typeof starlight>[0]}
 */
export const STARLIGHT_CONFIG = {
	plugins: [
		starlightLinksValidator({
			exclude: ["/summary/"],
		}),
	],
	title: SITE_TITLE,
	favicon: "/favicon.ico",
	description: "My 1st semester notes of Engineering",
	head: STARLIGHT_CONFIG_HEAD,
	customCss: ["./src/global.css"],
	tableOfContents: {
		maxHeadingLevel: 4,
	},
	lastUpdated: true,
	expressiveCode: true,
	credits: true,
	components: {
		Head: "./src/components/Head.astro",
		Sidebar: "./src/components/Sidebar.astro",
		MarkdownContent: "./src/components/MarkdownContent.astro",
		SiteTitle: "./src/components/SiteTitle.astro",
		PageTitle: "./src/components/PageTitle.astro",
		Footer: "./src/components/Footer.astro",
	},
	sidebar: [
		{
			label: "Computer Organization and Digital Design",
			autogenerate: {
				directory: "computer-organization-and-digital-design",
			},
		},
		{
			label: "Data Structures & Algorithms",
			items: [
				{
					label: "Algorithms",
					autogenerate: {
						directory: "data-structure-algorithms/algorithms",
					},
				},
				{
					label: "Data structures",
					autogenerate: {
						directory: "data-structure-algorithms/data-structures",
					},
				},
			],
		},
		{
			label: "Program Construction",
			autogenerate: {
				directory: "program-construction",
			},
		},
		{
			label: "Theory of Electricity",
			autogenerate: {
				directory: "theory-of-electricity",
			},
		},
		{
			label: "License",
			link: "/license",
		},
	],
};
