// ════════════════════════════════════════════════════════
// CharaMaker — Config (PUBLIC EXAMPLE)
// ════════════════════════════════════════════════════════
// 1. Copy this file → rename to "config.js"
// 2. Fill in your actual values below
// 3. config.js is in .gitignore — won't be uploaded to GitHub
// ════════════════════════════════════════════════════════

window.CONFIG = {
  // Cloudflare Worker URL (your deployed API)
  API: 'https://YOUR-WORKER-NAME.workers.dev',

  // Supabase project URL — Settings → API → Project URL
  SUPABASE_URL: 'https://xxxxxxxx.supabase.co',

  // Supabase anon public key — Settings → API → anon public
  // (this is safe to expose — RLS policies protect data)
  SUPABASE_KEY: 'eyJhbGc...',
};
