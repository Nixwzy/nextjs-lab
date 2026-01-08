'use client';

type Props = {
    params: {
        name: string;
    }
}
import React from 'react';

const Page = ({ params }: Props) => {
  return (
    <div>
      Pagina sobre {params.name}
    </div>
  );
};

export default Page;