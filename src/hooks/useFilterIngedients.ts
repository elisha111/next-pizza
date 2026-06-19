import { Ingredient } from "@/prisma/generated/prisma/client";
import { apiClient } from "@/services/api-client";
import { useEffect, useState } from "react";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useFilterIngedients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await apiClient.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
