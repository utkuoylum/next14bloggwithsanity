import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    'currentSlug': slug.current
}
  `;
  const data = await client.fetch(query)
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData()

  return (
    <div>
      <h1>Blogappi index</h1>
    </div>
  );
}
