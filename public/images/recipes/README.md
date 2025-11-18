# Recipe Images

This folder contains images for recipes.

## 📸 How to Add Images:

### Option 1: Single Image (Simple)

1. **Add your image file here**
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 800x600px or larger
   - Use descriptive filenames: `ceviche-sea-bass.jpg`

2. **Update the recipe data**
   - Open `lib/data/methods.ts`
   - Find your recipe
   - Add the image field: `image: '/images/recipes/your-image.jpg'`

**Example:**
```typescript
{
  id: 'r1',
  title: 'סביצ\'ה דניס קלאסית',
  image: '/images/recipes/ceviche-sea-bass.jpg',
  // ... rest of recipe
}
```

---

### Option 2: Multiple Images (Recommended) 🎠

Add multiple photos showing different stages: ingredients, preparation, cooking, final dish.

1. **Add your image files with descriptive names:**
   ```
   /public/images/recipes/
     ├── ceviche-final-dish.jpg       (hero/main photo)
     ├── ceviche-fresh-fish.jpg       (raw ingredients)
     ├── ceviche-preparation.jpg      (cutting/prep)
     ├── ceviche-marinating.jpg       (in process)
     └── ceviche-plated.jpg           (serving)
   ```

2. **Update the recipe data with images array:**
   ```typescript
   {
     id: 'r1',
     title: 'סביצ\'ה דניס קלאסית',
     images: [  // Use 'images' instead of 'image'
       '/images/recipes/ceviche-final-dish.jpg',    // First image = hero
       '/images/recipes/ceviche-fresh-fish.jpg',
       '/images/recipes/ceviche-preparation.jpg',
       '/images/recipes/ceviche-marinating.jpg',
       '/images/recipes/ceviche-plated.jpg'
     ],
     // ... rest of recipe
   }
   ```

**Features:**
- ✅ Carousel gallery on recipe detail page
- ✅ Click to view full-screen with zoom
- ✅ "+X photos" badge on recipe cards
- ✅ Perfect for phone photos (portrait/landscape)

---

## 📱 Phone Photo Tips (for Spearfishing Community):

### Best Photos to Include:
1. **Fresh Catch** - The fish right after catching
2. **Cleaning/Filleting** - Show the preparation process
3. **Ingredients** - Laid out and ready
4. **Cooking** - On the grill, in the pan, or in the oven
5. **Final Dish** - Beautiful plated presentation

### Photo Quality Tips:
- ✅ Natural lighting is best (near window or outdoors)
- ✅ Clean background (focus on the food/fish)
- ✅ Phone photos work great - no need for professional camera
- ✅ Portrait or landscape - both orientations supported
- ✅ Show details (texture of fish, color of ingredients)
- ✅ Multiple angles help tell the story

### File Management:
- **Naming**: Use descriptive names with recipe and stage
  - Good: `ceviche-fresh-sea-bass.jpg`
  - Good: `grilled-denis-on-grill.jpg`
  - Bad: `IMG_1234.jpg`
- **Size**: Keep under 2MB per image (phone photos are usually fine)
- **Format**: `.jpg` for photos, `.png` for graphics/text
- **Organization**: Group by recipe name

---

## 🌐 Using External URLs:

You can also use image URLs from cloud storage or image hosting:

```typescript
images: [
  'https://your-cloud-storage.com/fish-photo.jpg',
  'https://imgur.com/abc123.jpg'
]
```

**Note**: Make sure to add the domain to `next.config.ts` remotePatterns if using external URLs.

---

## 🔄 Converting from Placeholders to Real Photos:

Currently using placeholder images? Here's how to switch:

**Before (placeholder):**
```typescript
images: [
  'https://placehold.co/800x600/0ea5e9/white.png?text=Ceviche'
]
```

**After (real photos):**
```typescript
images: [
  '/images/recipes/my-ceviche-photo.jpg'  // Your actual photo
]
```

Just replace the URL with your local image path!

---

## 📂 Suggested Directory Structure:

```
/public/images/recipes/
  ├── ceviche/
  │   ├── ceviche-hero.jpg
  │   ├── ceviche-prep-1.jpg
  │   └── ceviche-prep-2.jpg
  ├── fried/
  │   ├── fried-sea-bass-golden.jpg
  │   └── fried-sea-bass-plated.jpg
  └── grilled/
      ├── grilled-denis-on-coals.jpg
      └── grilled-denis-served.jpg
```

Or keep them all in one folder - whatever works for you!
