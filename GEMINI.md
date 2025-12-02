# 🐟 Gemini Context: Spearfishing Recipes Website

> **Project**: Modern website for the Israeli spearfishing community.
> **Purpose**: Share recipes, educate on fish handling, and store collective knowledge.
> **Language**: Hebrew (RTL).
> **Status**: Prototype Phase (Visuals & Mock Data).

---

## 🛠️ Tech Stack & Conventions

### Architecture
- **Framework**: Next.js 16+ (App Router)
- **Data Fetching**: Server Actions (No legacy `/api` routes)
- **Database**: Prisma + PostgreSQL (Deferred for Prototype)
- **Styling**: Tailwind CSS v4 (with logical properties for RTL support, e.g., `start-`, `me-`)
- **Language**: TypeScript
- **Images**: Cloudinary (URL-based strategy from Day 1)

### Component Rules
- **Dir Structure**: `@/components/ui` (Shadcn), `@/components/layouts`, `@/components/shared`
- **Naming**: `PascalCase.tsx` for components, `kebab-case.tsx` for files.
- **RTL**: ALWAYS use logical properties (e.g., `ms-2` instead of `ml-2`).
- **Text**: All UI text must be in Hebrew.

---

## 📍 Routing Structure (App Router)

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Home Page (Hero, Latest Recipes) | ✅ In Progress |
| `/recipes` | Recipe Feed (Filters, Search) | ✅ In Progress |
| `/recipes/[id]` | Single Recipe View | ✅ In Progress |
| `/videos` | Video Tutorials Grid | ⏳ Pending |
| `/tutorials` | Static Educational Guides | ⏳ Pending |
| `/about` | Community Info | ⏳ Pending |

---

## 📝 Data Models (Draft)

### Fish Type Enum (Hardcoded for consistency)
- `locus` (דקר)
- `intias` (אינטיאס)
- `labrak` (לברק)
- `musar` (מוסר)
- `denis` (דניס)
- `srgus` (סרגוס)
- `other` (אחר)

### Recipe Interface
```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  chefName: string; // The fisherman/cook
  fishType: FishType;
  cookingMethod: 'baking' | 'frying' | 'raw' | 'grill' | 'soup';
  difficulty: 'easy' | 'medium' | 'hard';
  images: string[]; // Cloudinary URLs
  ingredients: string[];
  instructions: string[];
}
```

---

## 🚀 Implementation Roadmap

### Phase 1: Visual Prototype (Current Focus)
- [x] Setup basic layouts (Header/Footer)
- [ ] **Route**: Implement `/videos` (Grid of mock videos)
- [ ] **Route**: Implement `/tutorials` (List of guides)
- [ ] **Route**: Implement `/about` (Static text)
- [ ] **UX**: Polish Home & Recipe pages with better mock data.
- [ ] **Mock Data**: Create robust `lib/data/mock.ts` with diverse examples.

### Phase 2: Backend Integration (Deferred)
- [ ] Setup PostgreSQL & Prisma.
- [ ] Implement Server Actions for `createRecipe`.
- [ ] Connect Cloudinary SDK.
- [ ] Add "Guest Submission" form.

### Phase 3: Community Features
- [ ] User Authentication (NextAuth).
- [ ] Admin Dashboard.
- [ ] Comments & Ratings.

---

## 🧠 Agent Directives
1.  **Visuals First**: Prioritize UI/UX and responsiveness. Use placeholders if data is missing.
2.  **No Broken Links**: Ensure all nav items point to a real route (even if empty).
3.  **Logical RTL**: Strictly check for `left/right` CSS classes and replace with `start/end`.
