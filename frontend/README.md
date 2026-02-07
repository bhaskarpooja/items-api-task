# Items API – Frontend UI

Simple UI for the Items REST API (Create item, Get item by ID). Deploy to **Vercel** or **Netlify** and point it at your backend on Render.

## Local development

1. Install dependencies:
   ```bash
   cd frontend && npm install
   ```
2. Create `.env` (copy from `.env.example`) and set the API URL:
   ```
   VITE_API_URL=http://localhost:8080
   ```
   Or use the Render URL: `https://items-api-task.onrender.com`
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

## Deploy to Vercel or Netlify

- **Build command:** `npm run build`
- **Output/publish directory:** `dist`
- **Root directory:** `frontend` (if your repo root is the parent of `frontend`)

Set environment variable:

- **Vercel:** Project → Settings → Environment Variables → add `VITE_API_URL` = `https://items-api-task.onrender.com`
- **Netlify:** Site settings → Environment variables → add `VITE_API_URL` = `https://items-api-task.onrender.com`

After deploy, add your frontend URL to the **backend** CORS allowed origins (see main README).
