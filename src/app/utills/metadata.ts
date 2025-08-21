import type { Metadata } from "next";

export function getCategoryMetadata(
  category: string,
  categoryId: string
): Metadata {
  return {
    title: `${category} | Interview Questions`,
    description: `Learn more about ${category} with ID ${categoryId}`,
  };
}
