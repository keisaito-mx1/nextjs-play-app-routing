"use client";

type Props = {
  title: string;
};
const PostCard = (props: Props) => {
  console.log(props, "from card");
  return (
    <div className="border p-2 rounded-md grid gap-4">
      <h3 className="text-md font-semibold">{props.title}</h3>
    </div>
  );
};

export default PostCard;
