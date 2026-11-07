# INNOCENT AI Video Portfolio

A static website. No build step and no install needed.

## Files
- `index.html` the page
- `styles.css` the design
- `script.js` the video gallery, player and menu
- `vercel.json` Vercel settings

## Deploy to Vercel

Vercel doesn't take a plain ZIP upload, so use one of these two ways.

### Option A: Vercel CLI (fastest)
1. Unzip this folder.
2. Install Node.js from https://nodejs.org if you don't have it.
3. Open a terminal inside the `innocent-portfolio` folder and run:
   ```
   npm install -g vercel
   vercel
   ```
4. Log in when asked. Press Enter to accept the defaults (framework: Other, no build command).
5. Run `vercel --prod` to publish to your live address.

### Option B: GitHub
1. Create a new GitHub repository and upload these files to it.
2. In Vercel, click Add New > Project and import the repository.
3. Framework Preset: Other. Leave Build Command and Output Directory empty.
4. Click Deploy.

## Check after deploying
Open your Vercel link, tap the first video card and press play. Test on desktop and on your phone.

## Add or change videos
Open `script.js` and edit the `V` list at the top. Each video looks like this:

```
["Title", categoryNumber, "Short description", colorNumber, "CLOUDINARY_VIDEO_URL", "X_POST_URL"]
```

Category numbers: 0 Cinematic AI, 1 AI Commercials, 2 AI UGC, 3 AI Animation, 4 Short Films, 5 Web3 & Crypto, 6 Experimental.
Videos without the last two items show a placeholder player.

Your first video is already set up with your Cloudinary link and your X post link.
