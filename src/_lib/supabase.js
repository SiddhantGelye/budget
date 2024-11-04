import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://lsnddpnwzrjigdolceyd.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbmRkcG53enJqaWdkb2xjZXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MjI3NDQsImV4cCI6MjAzOTI5ODc0NH0.TyoF2StC17SfVdqkh7HCvmSIRaoguS41h_uvxsFb5ks";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
