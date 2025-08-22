import QuestionSelection from "./QuestionSelection";
import type { Metadata } from "next";
import {getCategoryMetadata} from "@/app/utills/metadata"
import { IPagePropsType } from "@/app/interface/interface";
import QuestionTitle from "@/app/components/QuestionTitle";

export async function generateMetadata({
  params,
}: IPagePropsType): Promise<Metadata> {
  return getCategoryMetadata(params.category, params.categoryId);
}

export default function Page({ params }: IPagePropsType) {
  return (
    <div>
      <QuestionTitle category={params.category} />
      <div style={{ marginTop: "5rem" }}>
        <QuestionSelection
          category={params.category}
          categoryId={params.categoryId}
        />
      </div>
    </div>
  );
}
