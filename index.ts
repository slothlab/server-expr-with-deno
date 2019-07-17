import { authCustomToken, createCustomToken } from "https://cdn.jsdelivr.net/gh/denoserverless/firebase-auth-rest/mod.ts";
import { config } from "https://deno.land/x/dotenv/dotenv.ts";
import serviceAccount from "./firebase.service.json";

const { WEB_API_KEY, UUID } = config()

async function main() {
  const token = createCustomToken(serviceAccount, UUID);
  const { idToken } = await authCustomToken(WEB_API_KEY, token);

  console.log('done')
}

main();