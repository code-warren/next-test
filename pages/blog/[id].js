import Link from "next/link";

function Post({ post }) {
  return ( 
    <>
      <h1>Post</h1>

      <Link href="/blog">
        Retour
      </Link>
      <hr />
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";
  const res = await fetch(URL);
  const posts = await res.json();
  const paths = posts.map(p => ({ params: { id: p.id.toString() } }));
  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const URL = `https://jsonplaceholder.typicode.com/posts/${params.id}`; // Ajout des backticks (`) pour utiliser une template string
  const res = await fetch(URL);
  const post = await res.json();
  return {
    props: { post }
  };
}
