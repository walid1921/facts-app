import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tawrhlqrvigvvzhkdibq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhd3JobHFydmlndnZ6aGtkaWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMjQwODksImV4cCI6MTk4NzgwMDA4OX0.6mW34BKh6WFlGprLEliSBcfgWhz23o4jo8HygGTLhXY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
