type Props = {
  params: {
    id: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
};

const Page = async (param: Props) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${param.params.id}`
  ).then((response) => response.json());

  const post = result as Post;

  console.log(post);

  return (
    <section>
      <article className="grid gap-2">
        <h3>{post.title}</h3>
        <p className="text-sm text-gray-500">{post.body}</p>
      </article>
    </section>
  );
};

export default Page;
