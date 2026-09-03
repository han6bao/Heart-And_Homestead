# Heart & Homestead Photography — Vercel port (showcase)

This is a standalone, Vercel-deployable copy of the Higgsfield-hosted
Heart & Homestead Photography website. It renders the same pages, design,
real photography, and placeholders — no new generated images were added.

The live site at https://heart-and-homestead.higgsfield.app is untouched;
this copy lives in its own folder.

## Deploy
```bash
cd app
npx vercel login
npx vercel deploy --prebuilt --yes
```
The `.vercel/output` folder is a prebuilt Build Output API v3 bundle, so no
build step runs on Vercel's side. The first deploy returns the preview URL;
run it again or open the project in the Vercel dashboard to promote to
production / attach a custom domain.

## One-click deploy (script included)
A ready-to-run script ships with this package:

```bash
cd app
chmod +x deploy-vercel.sh   # only needed once after unzipping
./deploy-vercel.sh          # deploy to a Vercel *preview* URL
./deploy-vercel.sh --prod   # deploy to *production* (your live domain)
```

What it does, step by step:
1. Installs the Vercel CLI if it is missing (`npm i -g vercel`).
2. Signs you in if needed — a browser tab opens; click **Allow**.
3. Checks that the prebuilt `.vercel/output` bundle exists (it does, fresh
   from the zip).
4. Runs `vercel deploy --prebuilt --yes` (plus `--prod` when you asked for
   production) and prints the resulting URL.

No build happens on Vercel — the zip already contains the compiled site.

## What works
- All pages (Home, About, Portfolio, Sessions, Experiences, Locations,
  Client Area, Inquire, FAQ), SSR-rendered.
- The full emerald design system, real client photos, labeled placeholders.
- Contact details, Pixieset gallery link, Instagram/Facebook links.

## Leads: the inquiry form works
On this port the "Send My Story" form sends every lead **straight to
Emily's inbox (handhphoto26@gmail.com)** via FormSubmit — no database, no
API keys, nothing to configure on Vercel.

### ⚠️ IMPORTANT — activate FormSubmit with the FIRST inquiry (read this, Emily)

FormSubmit only starts delivering after it is activated once. Here is exactly
what happens and what to do:

1. **Someone submits the form.** As soon as the very first "Send My Story"
   submission goes through (yours or a tester's), FormSubmit sends **one
   activation email** to **handhphoto26@gmail.com** with a subject like
   *"FormSubmit - Confirm your email"* or *"Active your email"*.

2. **Check your inbox.** It may take 1–2 minutes to arrive. If you don't see
   it right away, **check the Spam / Junk folder** — it often lands there the
   first time. (Some providers also hide it under "Promotions" or "Updates".)

3. **Open it and click the confirmation link / button** (something like
   *"Active Email"* or *"Yes, subscribe to email"*). That single click turns
   the inbox on permanently.

4. **Done.** From that moment on, every inquiry arrives as a tidy
   table-format email to that same inbox — no further setup, ever.

**If the first activation email never shows up:**
- Wait a few minutes and re-check Spam before assuming it failed.
- Make sure the form actually returned the green "Thank you" message (that
  means the bridge accepted the submission).
- As a last resort, submit the form once more — FormSubmit re-sends the
  activation email.

### Notes
- Override the destination with a `DESTINATION_EMAIL` env var on Vercel if it
  ever changes.
- On the Higgsfield host the form still saves to the D1 database as before;
  this copy uses the email path automatically because no DB binding exists.
- Free-tier caveat: FormSubmit is a community service — fine for a showcase
  and real leads now, but if volume grows or reliability becomes critical,
  the code comment points at upgrading to Resend/SendGrid.

## Troubleshooting: common prebuilt deploy errors

**Deploy says the output directory is missing**
- You ran the command from the wrong folder. `vercel deploy --prebuilt`
  must run from the `app/` folder (the one containing `.vercel/output`).
- The folder was re-created/re-cloned and `.vercel/output` is gone.
  Re-download this zip and deploy from it.

**Vercel runs a build anyway and shows `Command "bun run build" exited with 2`**
- A build command was configured on the Vercel project (or the repo import
  added one). A `--prebuilt` deploy should never build. Fix: in the Vercel
  project dashboard → Settings → General → Build & Development Settings,
  clear Build Command and Output Directory, then re-run `./deploy-vercel.sh`.

**Deploy succeeds but the site shows 404 or a blank page**
- The prebuilt bundle is incomplete. Redeploy from a fresh unzip of this zip
  with `./deploy-vercel.sh --prod`. (`.vercel/output/static` holds the client
  assets; if it was emptied, the catch-all route has nothing to serve.)
- If you rebuilt locally, make sure the routes config still ends with
  `{ "src": "/(.*)", "dest": "/__server" }` — the catch-all must point at the
  serverless function.

**Function errors / 500s (FUNCTION_INVOCATION_FAILED)**
- Check the project's Node.js version: Settings → General → Node.js Version
  must be **20.x or newer** (the bundle uses modern Node APIs).
- View the function logs in the dashboard → Functions → __server → Logs and
  share the error if a fix is needed.

**`vercel login` fails or says credentials expired**
- Run `vercel logout && vercel login` and re-authorize.
- Or use a token: `vercel deploy --prebuilt --yes --token=<TOKEN>` from the
  `app/` folder. Prefer an *account-scoped* token — project-scoped tokens only
  work after the project already exists.

**Opening the URL shows a Vercel login/SAML wall**
- The deployment was created inside a team with SSO enforcement. Deploy with
  `--token` of a user in that team, or ask the team admin to add you.

**Deploy hangs on "Uploading..."**
- The bundle is ~13 MB; give it a minute. If it stalls repeatedly, retry once
  — transient network hiccups are common.

**Everything deployed but the inquiry form shows "not connected"**
- That is expected if the email bridge was not yet wired in your copy. This
  package emails leads to handhphoto26@gmail.com (see the activation section
  above). If you swapped in a different build, make sure
  `src/lib/api/inquiries.functions.ts` still posts to FormSubmit (or your own
  email API) and that the function chunk is inside
  `.vercel/output/functions/__server.func/assets/`.

## Local development
```bash
cd app
bun install
bun run dev
```
Requires Node 20.19+ / Bun 1.x.