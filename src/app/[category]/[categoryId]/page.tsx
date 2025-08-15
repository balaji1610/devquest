
import type { Metadata } from "next";

interface PageProps {
  params: { categoryId: string; category: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categoryId, category } = params;

  return {
    title: `${category} | Interview Questions`,
    description: `Learn more about ${category} with ID ${categoryId}`,
  };
}

export default function Page({ params }: PageProps) {
  const { categoryId, category } = params;

  return (
    <h1>
      Blog Post: {categoryId} : {category}
    </h1>
  );
}
