export interface IquestionsType {
  id: string;
  question: string;
  isImportant: boolean;
}

export interface IapplicationType {
  category: string;
  categoryId: string;
  name: string;
  questions: IquestionsType[];
}

export interface IPagePropsType {
  params: { category: string; categoryId: string };
}

export interface IcategoryType {
  currentcategory: string;
  currentcategoryId: string;
  currentQuestions: IquestionsType[];
}
