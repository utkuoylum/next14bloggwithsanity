import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2024-07-05",
  dataset: "production",
  projectId: "digy4ki7",
  useCdn: false
});


const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
return builder.image(source)
}
