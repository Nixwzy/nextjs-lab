// jsonplaceholder.typicode.com/posts/1
// Agora é possível acessar o ID do post via URL dinâmica ;)

import { Post } from '@/types/Post';

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { postId } = await params;
  const postRequest = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post: Post = await postRequest.json();

  return (
    <div className="text-center">
      <div>Id: {post.id}</div>
      <h1 className="text-3xl uppercase my-3">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;
