# Recipe Images

This folder contains images for recipes.

## How to Add Images:

1. **Add your image file here**
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 800x600px or larger
   - Use descriptive filenames: `ceviche-sea-bass.jpg`

2. **Update the recipe data**
   - Open `lib/data/methods.ts`
   - Find your recipe
   - Add the image field: `image: '/images/recipes/your-image.jpg'`

## Example:

```typescript
{
  id: 'r1',
  title: 'סביצ\'ה דניס קלאסית',
  image: '/images/recipes/ceviche-sea-bass.jpg',  // Add this line
  // ... rest of recipe
}
```

## Using External URLs:

You can also use external image URLs:

```typescript
image: 'https://example.com/fish-recipe.jpg'
```

## Tips:

- Use high-quality, well-lit photos
- Show the finished dish
- Keep file sizes reasonable (<500KB recommended)
- Use consistent aspect ratios (4:3 or 16:9 work well)
