import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://ddeylykymqsmfsarvbmr.supabase.co';
const supabaseKey = 'sb_publishable_6-L62ClAnDz9vZvC1-RZQg_hDbi4Jd5';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase connected");

// Check if user is logged in
supabase.auth.getUser().then(({ data }) => {
  console.log("Current user:", data.user);
});
