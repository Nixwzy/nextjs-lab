'use client';

type Props = {
    params: {
        postId: string;
    }
}
import React from 'react';

const Page = ({ params }: Props) => {
  return (
    <div>
      Blog id: {params.postId}
      commit test
    </div>
  );
};

export default Page;