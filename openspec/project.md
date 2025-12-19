# Project Context

## Purpose
A modern, community-driven website for the Israeli spearfishing community. The platform serves as a hub to share fish recipes, educate on proper fish handling and preparation, and preserve collective knowledge.
- **Language**: Hebrew (RTL).
- **Target Audience**: Israeli spearfishers and seafood enthusiasts.
- **Current Phase**: Visual Prototype (Phase 1).

## Tech Stack
- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with `tailwindcss-rtl` and logical properties)
- **UI Library**: Shadcn UI (Radix Primitives), Lucide React (Icons)
- **Media**: `yet-another-react-lightbox`, `embla-carousel-react`, Cloudinary (Planned)
- **Database (Deferred)**: PostgreSQL + Prisma
- **Fonts**: `@fontsource/assistant`

## Project Conventions

### Code Style
- **Naming**: `PascalCase` for component names, `kebab-case` for file names (e.g., `RecipeCard.tsx` inside `components/shared`).
- **Imports**: Use absolute imports with `@/` alias.
- **Strict RTL**: ALWAYS use logical CSS properties (e.g., `ms-2` instead of `ml-2`, `ps-4` instead of `pl-4`, `text-start` instead of `text-left`).
- **Language**: All UI text must be in Hebrew.

### Architecture Patterns
- **Directory Structure**:
  - `app/`: Next.js App Router pages and layouts.
  - `components/ui/`: Base UI components (Shadcn).
  - `components/layouts/`: Structural components (Header, Footer).
  - `components/shared/`: Reusable domain components (RecipeCard, Filters).
  - `lib/`: Utilities, types, and mock data.
- **Data Fetching**: Server Actions (preferred over API routes). Currently using mock data for the prototype phase.

### Git Workflow
- **Commits**: Clear, descriptive messages. Focus on "why" a change was made.
- **Branching**: Direct commits to `main` for prototype velocity, or feature branches for larger complex tasks.

## Domain Context
- **Fish Types**: The system currently recognizes specific local fish: Locus (Grouper), Intias (Amberjack), Labrak (Sea Bass), Musar (Meagre), Denis (Sea Bream), Srgus (White Seabream).
- **Cooking Methods**: Baking, Frying, Raw (Sashimi/Ceviche), Grill, Soup.
- **Data Models**: Recipes include Chef Name, Fish Type, Difficulty, Cooking Method, and Ingredients.

## Implementation Roadmap
1.  **Phase 1 (Current)**: Visual Prototype with mock data, polished UI/UX, and responsive design.
2.  **Phase 2**: Backend integration with PostgreSQL, Prisma, and Cloudinary.
3.  **Phase 3**: Community features (Auth, Comments, Ratings).

## Important Constraints
- **Visuals First**: The prototype must look polished and responsive even with placeholder data.
- **Navigation**: All links must work (even if pointing to empty placeholder pages).