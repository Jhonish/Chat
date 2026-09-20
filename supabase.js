const SUPABASE_URL = "https://rgynjrcdlcvdhieddiao.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJneW5qcmNkbGN2ZGhpZWRkaWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MTU2NTUsImV4cCI6MjEwNTQ5MTY1NX0.jRYJN77AqCLm8c9nOIKMHYXQEF45O3Z-F_aqB20tiks";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
