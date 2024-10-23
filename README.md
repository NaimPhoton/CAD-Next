# CAD-Next

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## File Structure

cad/
├── public/                  # Static files (images, fonts, etc.)
│   ├── favicon.ico
│   └── logo.png
│
├── src/                     # All core application code
│   ├── components/          # Reusable UI components
│   │   ├── Button
│   │   │      ├── Button.tsx
│   │   │      └── Button.module.css
│   │   └── Layout.js
│   │
│   ├── context/             # React Contexts for global state
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js  # Context for theming
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useTheme.js      # Hook for dynamic theming
│   │
│   ├── lib/                 # Utility functions and helpers
│   │   ├── api.js
│   │   └── fetcher.js
│   │
│   ├── locales/             # Internationalization (i18n) files
│   │   ├── en/              # English translations
│   │   │   └── common.json
│   │   └── es/              # Spanish translations
│   │       └── common.json
│   │
│   ├── pages/               # Next.js pages (routes)
│   │   ├── _app.js          # Custom App component
│   │   ├── _document.js     # Custom Document for SSR
│   │   ├── index.js         # Home page
│   │   ├── login.js         # Login/Register page
│   │   ├── dashboard/       # Nested dashboard routes
│   │   │   ├── index.js
│   │   │   └── settings.js
│   │   └── api/             # API routes
│   │       └── hello.js
│   │
│   ├── state/               # Redux state management
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   └── themeSlice.js # Slice for theme state
│   │   └── actions/
│   │       └── authActions.js
│   │
│   ├── backend/             # Backend processing logic
│   │   ├── auth/
│   │   │   └── authHelpers.js
│   │   ├── database/
│   │   │   └── dbConnect.js
│   │   └── services/
│   │       └── userService.js
│   │
│   ├── styles/              # Global styles and themes
│   │   ├── globals.css
│   │   ├── themes/          # Theme-specific styles
│   │   │   ├── light.css
│   │   │   └── dark.css
│   │   └── Home.module.css
│   │
│   ├── utils/               # Utility functions/helpers
│   │   └── formatDate.js
│   │
│   └── types/               # TypeScript types and interfaces
│       ├── auth.d.ts
│       └── theme.d.ts
│
├── next.config.js           # Next.js configuration
├── .env.local               # Environment variables for local development
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── .gitignore               # Files to ignore in version control
