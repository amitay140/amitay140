// Recipe types
export type DifficultyLevel = 'קל' | 'בינוני' | 'מתקדם';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  difficulty: DifficultyLevel;
  fishType?: string; // optional for now
  image?: string; // optional recipe image URL or path (legacy - single image)
  images?: string[]; // optional multiple recipe images (new - takes precedence over image)
  ingredients?: string[]; // optional for MVP
  instructions?: string[]; // optional for MVP
}

// Cooking method types
export interface CookingMethod {
  id: string;
  slug: string; // for URL routing (e.g., "ceviche")
  name: string; // Hebrew display name
  description: string;
  icon?: string; // emoji or icon character
  recipes: Recipe[];
}
