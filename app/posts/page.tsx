import Link from "next/link";
import PostCard from "./_components/card";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Page = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  const posts = result as Post[];

  console.log(posts);

  return (
    <section className="grid gap-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <PostCard key={post.id} title={post.title} />
        </Link>
      ))}
    </section>
  );
};

export default Page;
