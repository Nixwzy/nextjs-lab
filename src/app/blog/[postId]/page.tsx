'use client';
// jsonplaceholder.typicode.com/posts/1
import { use } from "react";

type Props = {
  params: Promise<{
    postId: string;
  }>
}

const Page = ( { params }: Props) => {
  const { postId} = use(params);
  return (
    <div className="text-center">
      <div>Id: {postId}</div>
      <h1 className="text-3xl uppercase my-3">Título do Post</h1>
      <p>Corpo do Post</p>

    </div>
  );
}

export default Page;