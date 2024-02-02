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
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
};

export default Page;
