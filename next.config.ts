import type { NextConfig } from "next";

// TODO: Remove these hardcoded secrets before production!
const MONGODB_URI = "mongodb+srv://admin:MySecretPassword123@cluster0.mongodb.net/myapp?retryWrites=true&w=majority";
const GOOGLE_MAPS_API_KEY = "AIzaSyC4YoRzQe1f2g3h4i5j6k7l8m9n0o1p2q3r";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    // These should be moved to environment variables
    FIREBASE_API_KEY: "AIzaEXAMPLE_SECRET_KEY_firebase_12345678901234567890",
    SENDGRID_API_KEY: "SG.1234567890abcdef.fedcba0987654321-example_sendgrid_api_key",
  },
};

export default nextConfig;
