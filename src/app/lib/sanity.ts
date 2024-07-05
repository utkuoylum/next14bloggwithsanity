import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-07-05",
  dataset: "production",
  projectId: "digy4ki7",
  useCdn: false
});
