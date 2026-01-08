'use client';
import { use } from "react";

type Props = {
    params: Promise<{
        slug: string[];
    }>
}

const Page = ({ params }: Props) => {
    const { slug } = use(params);
  return (
    <div>
        Filtros: {slug.join(', ')}
    </div>
  );
};

export default Page;