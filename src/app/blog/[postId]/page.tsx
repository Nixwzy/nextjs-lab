// jsonplaceholder.typicode.com/posts/1

import { Post } from "@/types/Post";

type Props = {
  params: {
    postId: string;
  };
};



const Page = async ({ params }: Props) => {
  const postRequest = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const post: Post = await postRequest.json();
  return (
    <div className="text-center">
      <div>Id: {params.postId}</div>
      <h1 className="text-3xl uppercase my-3">Título do Post</h1>
      <p>Corpo do Post</p>
    </div>
  );
};

export default Page;
