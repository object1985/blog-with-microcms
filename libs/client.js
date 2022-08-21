import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "tonaise-blog-nextjs",
	apiKey: process.env.API_KEY,
});