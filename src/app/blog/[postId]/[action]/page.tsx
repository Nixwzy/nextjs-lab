'use client';
import { use } from "react";

type Props = {
    params: Promise<{
        postId: string;
        action: string;
    }>
}

const Page = ({ params }: Props) => {
    const { postId, action } = use(params);
  return (
    <div>
      Blog ID: {postId} ({action})
    </div>
  );
};

export default Page;