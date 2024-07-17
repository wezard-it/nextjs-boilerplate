This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

We use pnpm in webprojects.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

We use [Shadcn/Ui](https://ui.shadcn.com/docs) as a reference for build the component libraries.

This is the folder structure to maintain across projects.

```bash
.
├── app/
│ └── routes/
│ ├── components
│ ├── page.tsx
│ ├── loading.tsx
│ ├── layout.tsx
│ └── error.tsx
├── components/
│ ├── ui/
│ │ └── shadcn-components
│ ├── foo-components/ # for composed components we use a index export under a folder named after the components.
│ │ ├── foo-component-1
│ │ ├── foo-component-2
│ │ └── index.tsx
│ ├── bar-component.tsx # for single components we use a tsx file under components
│ ├── providers
│ └── hooks
├── config/ # all file of config should fall under this folder
│ ├── routes.ts # all the routes of the application.
│ ├── navigation.ts # the config behind the navigation menu across the app (sidebar, navbar, etc)
│ └── stripe.ts # eventual configuration of Stripe
├── lib/
│ ├── actions/ # should be atomized based on needs.
│ │ ├── actions-1.ts
│ │ ├── actions-2.ts
│ │ └── ....
│ ├── sdk/ # should be atomized based on needs.
│ │ ├── sdk-1.ts
│ │ ├── sdk-2.ts
│ │ └── ....
│ ├── auth.ts(next-auth) # Auth.js base configuration
│ ├── validation.ts # Zod validation schema for forms
│ ├── utils.ts # General utils shared across application
│ ├── locale.ts
│ └── places.ts
├── public/
│ ├── images
│ └── locale/
│ └── {{locale}}/ # If you add a locale you have to add this to supported locale in lib/locale
│ └── translation.json
├── styles/
│ └── global.css
└── types/
├── foo-types.ts
├── bar-types.ts
└── foobar-types.ts
```

# Useful docs && repo

-   [Zod](https://zod.dev/)
-   [Auth.js](https://authjs.dev/)
-   [Stripe](https://docs.stripe.com/)
-   [next-video](https://github.com/muxinc/next-video)
    Next video is a react component for adding video to your next.js application. It extends both the html video element and your Next app with features for automatic video optimization.
-   [DnD-kit](https://github.com/clauderic/dnd-kit)
    A drag and drop toolkit for react.
-   [Prisma](https://github.com/prisma/prisma)
    A ORM for app directly connected to db.
-   [Prismic](https://github.com/prismicio)
    A CMS for content-oriented app.
-   [Zustand](https://github.com/pmndrs/zustand)
    A Atomic state manager

to use this as a boilerplate run

```bash
create-next-app --example https://github.com/wezard-it/nextjs-boilerplate

```
