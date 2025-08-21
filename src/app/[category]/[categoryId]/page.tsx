import QuestionSelection from "./QuestionSelection";
import type { Metadata } from "next";
import { IPagePropsType } from "@/app/interface/interface";
import { getCategoryMetadata } from "@/app/utills/metadata";

export async function generateMetadata({
  params,
}: IPagePropsType): Promise<Metadata> {
  return getCategoryMetadata(params.category, params.categoryId);
}
export default function Page({ params }: IPagePropsType) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{params.category}</h1>
      <h1 style={{ textAlign: "center" }}>{params.categoryId}</h1>
      <h1>
        <QuestionSelection
          category={params.category}
          categoryId={params.categoryId}
        />
      </h1>
    </div>
  );
}
