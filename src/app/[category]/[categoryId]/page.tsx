import QuestionSelection from "./QuestionSelection";
import QuestionTitle from "@/app/components/QuestionTitle";
import { getCategoryMetadata } from "@/app/utills/metadata";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string; categoryId: string }>;
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return getCategoryMetadata(
    (await params).category,
    (await params).categoryId
  );
}
export default async function Page({ params }: PageProps) {
  return (
    <div>
      <QuestionTitle category={(await params).category} />
      <div style={{ marginTop: "5rem" }}>
        <QuestionSelection
          category={(await params).category}
          categoryId={(await params).categoryId}
        />
      </div>
    </div>
  );
}
