import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	token,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
