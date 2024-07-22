import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yibvkkiwjatbvpoglzmn.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpYnZra2l3amF0YnZwb2dsem1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNjUxMTIsImV4cCI6MjAzNjY0MTExMn0.YE9_Dx4_QFhDm-D2207DQZ1CVYvOyhIuKMJosqozpw4"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
