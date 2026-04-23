import animalData from './animals.json';

export const ANIMAL_CATEGORIES = animalData.categories;

export function getCategoryById(categoryId) {
  return ANIMAL_CATEGORIES.find((category) => category.id === categoryId);
}

export function getBreedById(categoryId, breedId) {
  const category = getCategoryById(categoryId);
  if (!category) {
    return null;
  }

  const breed = category.breeds.find((item) => item.id === breedId);
  if (!breed) {
    return null;
  }

  return { category, breed };
}

export function getAllBreedEntries() {
  return ANIMAL_CATEGORIES.flatMap((category) =>
    category.breeds.map((breed) => ({
      categoryId: category.id,
      categoryLabel: category.label,
      ...breed,
    }))
  );
}
