# fintech_devcon 2023

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Objectives

- Experience working with different aggregators raw data
  - Plaid
  - MX
- Experience benefits of working with a unified API

## Prerequisites

- Git
- Node

## Setup

```bash
# Clone Repo
git clone git@github.com:quiltt/fintech-devcon-2023.git

# Install Dependencies
npm install

# Run Development Server
npm run dev

# Open Development Site
open http://localhost:3000
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Steps

1. Setup Project
2. Login to https://www.quiltthub.com
3. Click `[BUTTON]` to login locally
4. Copy Session into `.env` as `QUILTT_API_KEY=` for GraphQL Codegen
5. Create Application with Raw data from Plaid or Mx

- Pretend to spend a week prototyping integration backend, then a month getting it stable in production

6. Pick from Business Misfortunes

- Need to Support Uncovered Banks
- Data Quality Issues
- Contract Negotiating Woes
- Unexpected Vendor Outage

7. Upgrade to Unified GraphQL API

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
