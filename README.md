# Ian's Personal Website

This is a minimal Next.js + TypeScript + Tailwind scaffold for Ian's personal website.

Getting started (PowerShell on Windows):

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in a browser after the dev server starts.

Next steps:
- Replace placeholder content in `src/pages` and `src/components`.
- Add images into `public/` (e.g., `public/avatar.png`).
- Configure deployment (Vercel recommended).

MDX blog (optional)
--------------------

This project includes a `posts/` folder with an MDX stub (`posts/sample-post.mdx`) and pages that can render MDX content using `next-mdx-remote`.

To enable and test MDX rendering locally, install the MDX-related packages and then run the dev server:

```powershell
npm install next-mdx-remote gray-matter
npm run dev
```

The dynamic blog post page at `/blog/[slug]` will read MDX files from `posts/` and render them. If you want syntax highlighting or extra remark/rehype plugins, add them and update the MDX serialize options in `src/pages/blog/[slug].tsx`.
