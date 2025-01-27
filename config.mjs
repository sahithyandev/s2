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
	"Theory of Electricity": "EE2012",

	"Computer Architecture": "CS2052",
	"Electronic Devices & Circuits": "EN1012",
	"Data Structure & Algorithms": "CS2022",
	"Introduction to Manufacturing Engineering": "ME1802",
	"Numerical Methods": "MA1032",
	"Programming Fundamentals": "CS2012",
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

[2].push(1, 2);

if (process.env.NODE_ENV === "production") {
	STARLIGHT_CONFIG_HEAD.push(
		{
			tag: "script",
			attrs: {
				rel: "preload",
				href: "https://www.googletagmanager.com/gtag/js?id=G-CM1QCK35XF",
			},
		},
		{
			tag: "script",
			content:
				"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config', 'G-CM1QCK35XF');",
		},
	);
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
			label: "Program Construction",
			autogenerate: {
				directory: "program-construction",
			},
		},
		{
			label: "License",
			link: "/license",
		},
	],
};
