export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  return <h1>Blog Post: {categoryId}</h1>;
}
