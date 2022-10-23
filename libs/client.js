// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "1msc5lktp2",
  apiKey: process.env.API_KEY,
});
