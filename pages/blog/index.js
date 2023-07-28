import Link from "next/link";

function Blog({posts}) {
    // const [posts, setPosts] = useState([])
    // const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6'
    // useEffect(()=> {
    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(posts => setPosts(posts))
    // }, [])
    return ( 
      <>
         <h1>Blog</h1>
         {posts?.map(p => (
         <Link href={"/blog/" + p.id} key={p.id}>
         <h5>{p.title}</h5>
         </Link>
    ))} 
         <hr />
         <pre>{JSON.stringify(posts, null, 2)}</pre>
      </>
     );
}

export default Blog;

export async function getStaticProps(){
    const URL = "https://jsonplaceholder.typicode.com/posts?_limit=6"
    const res = await fetch(URL)
    const posts = await res.json()
    return {
        props: {posts}
    }
}