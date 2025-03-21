# S2

My 2nd semester notes of Computer Science & Engineering.

Built using [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build/).

## Prerequisites

- Node (>= v18)
- [Bun](https://bun.sh) (>= v1.1.34) as package manager and runtime

## Contact

For any questions or support, feel free to contact me @
[sahithyan.dev](https://sahithyan.dev)

## Contributions

This section is for those who want to contribute. I have included details about
the codebase and the workflow.

### Setting up

1. You have to install the prerequisites on your machine.
2. Fork and clone the repository to your machine
3. Install the dependencies using `bun install`. **OTHER PACKAGE MANAGERS MUST
   NOT BE USED**.

Now you may start the development server using `bun run dev`. The development
server will be started on http://localhost:4321.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

### Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── [module]/(subsection)/
│   │   └── config.ts
│   ├── pages/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Static assets (like favicons), are placed under `public/` directory.

### Markdown files

Each markdown (`.md`) file under `src/content/docs` directory, is exposed as a
route based on its file name. The files must be named in the format
`{index-number}-{title}.md`.

The index number is used to place the file in the correct position in the
sidebar. It must start from 1 and go on continuously. It must be used in 2
digits.

Each markdown file must start with a frontmatter, which is similar to:

```md
---
title: Encoders & Decoders
sidebar:
  order: 14
slug: computer-organization-and-digital-design/encoders-decoders
prev: true
next: true
---
```

The title is the only required one. The other values are added automatically
when you make a commit. To make the file creation easy, a script
(`scripts/insert-page.js`) is made to create and organize the pages.

The below command creates `example.md` as the last file under the
`multivariable-calculus` directory.

```sh
bun scripts/insert-page.js src/content/docs/methods-of-mathematics/multivariable-calculus/ example
```

The below command creates `example.md` as the 10th file under the
`multivariable-calculus` directory. If there are more than 10 files already,
those files will be moved to the next position.

```sh
bun scripts/insert-page.js src/content/docs/methods-of-mathematics/multivariable-calculus/ example 10
```

You can pass the `--dry-run` argument to the script for testing purposes. This
argument will avoid file operations.

### Markdown content

The markdown content must follow the semantics of HTML.

- Don't use `#` in the markdown content. The title is already present in the
  frontmatter.
- Use `##` for the main headings. `###` for subheadings and so on.

### Assets

Notes require images and maybe other graphics. Images are preferred in `jpg`
format over `png` format, because of smaller size. Use
[Squoosh](https://squoosh.app) to convert and compress the images.
