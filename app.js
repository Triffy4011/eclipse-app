import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://ddeylykymqsmfsarvbmr.supabase.co';
const supabaseKey = 'sb_publishable_6-L62ClAnDz9vZvC1-RZQg_hDbi4Jd5';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase connected");

// Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Login
document.getElementById("login-btn").onclick = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value
  });

  if (error) {
    message.textContent = "Login failed: " + error.message;
  } else {
    message.textContent = "Logged in!";
    window.location.href = "dashboard.html";
  }
};

// Signup
document.getElementById("signup-btn").onclick = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: emailInput.value,
    password: passwordInput.value
  });

  if (error) {
    message.textContent = "Signup failed: " + error.message;
  } else {
    message.textContent = "Signup successful! Check your email.";
  }
};
