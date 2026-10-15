# fuluu-app.github.io

Public website for the Fuluu app: landing page, privacy policy (TR/EN), KVKK notice and account deletion.
Static Next.js site (`output: "export"`) deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Before publishing

Check `src/content/site.ts`: `controller` and `supabaseRegion` are hidden while `null`; KVKK still
requires the data controller's identity before launch. Bump `legalUpdatedAt` whenever a legal text changes.
Swap `StoreBadges` for the official store badges once the listings are live.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in out/
```

## Deploy

In the repo: Settings → Pages → Source: **GitHub Actions**. Every push to `main` redeploys.
