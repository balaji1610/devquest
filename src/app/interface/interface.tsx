export interface IquestionsType {
  id: string;
  question: string;
  isimportant: boolean;
}

export interface IapplicationType {
  category: string;
  categoryId: string;
  name: string;
  questions: IquestionsType[];
}
