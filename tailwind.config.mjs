import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			maxWidth: {
				prose: "84ch",
			},
			fontSize: {
				md: "1.07rem",
			},
			lineHeight: {
				md: "1.5rem",
			},
		},
	},
	plugins: [starlightPlugin()],
};
