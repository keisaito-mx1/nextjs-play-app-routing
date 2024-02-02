"use client";

type Props = {
  title: string;
  body: string;
};
const PostCard = (props: Props) => {
  console.log(props, "from card");
  return (
    <div className="border p-2 rounded-md grid gap-4">
      <h3 className="text-md font-semibold">{props.title}</h3>
      <p className="text-sm  text-gray-500">{props.body}</p>
    </div>
  );
};

export default PostCard;
