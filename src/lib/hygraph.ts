const ENDPOINT = import.meta.env.HYGRAPH_ENDPOINT;

async function gql<T>(query: string): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`Hygraph request failed: ${res.status}`);
  const { data, errors } = await res.json();
  if (errors?.length) throw new Error(errors[0].message);
  return data;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  publishDate?: string;
  coverPhoto: { id: string; url: string };
  content: { html: string };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  link?: string;
  coverPhoto: { id: string; url: string };
  content: { html: string };
}

const POST_FIELDS = `id slug title publishDate coverPhoto { id url } content { html }`;
const PROJECT_FIELDS = `id slug title link coverPhoto { id url } content { html }`;

export async function getPosts(): Promise<Post[]> {
  const data = await gql<{ posts: Post[] }>(`{ posts { ${POST_FIELDS} } }`);
  return data.posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const data = await gql<{ post: Post | null }>(
    `{ post(where: { slug: "${slug}" }) { ${POST_FIELDS} } }`
  );
  return data.post;
}

export async function getProjects(): Promise<Project[]> {
  const data = await gql<{ projects: Project[] }>(`{ projects { ${PROJECT_FIELDS} } }`);
  return data.projects;
}

export async function getRecentProjects(): Promise<Project[]> {
  const data = await gql<{ projects: Project[] }>(
    `{ projects(orderBy: publishDate_DESC, first: 3) { ${PROJECT_FIELDS} } }`
  );
  return data.projects;
}
