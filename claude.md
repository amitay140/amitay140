# 🐟 Master Control Program (MCP) - Spearfishing Recipes Website

> **Project**: Modern website for Israeli spearfishing community
> **Purpose**: Share recipes, educate on fish handling, and store collective knowledge
> **Language**: Hebrew (RTL)
> **Last Updated**: 2025-11-16

---

## 🖥️ DEVELOPMENT ENVIRONMENT

- **OS**: Windows
- **Terminal**: Git Bash
- **IDE**: WebStorm
- **Node.js**: v18+
- **Package Manager**: npm
- **Version Control**: Git

**All commands must be compatible with Windows Git Bash.**

---

## 🧱 1. ARCHITECTURE & TECH STACK

### 📦 Project Structure

This project uses **Next.js** (full-stack framework) with the App Router:

```
/recipes-fishing/
  /app/
    /api/
      /v1/
        /recipes/
        /videos/
        /tutorials/
    /(routes)/
      /recipes/
      /videos/
      /tutorials/
      /about/
    layout.tsx
    page.tsx
    globals.css

  /components/
    /ui/           # Shadcn components
    /layouts/      # Layout components
    /shared/       # Reusable components

  /lib/
    /prisma/       # Prisma client
    /utils/        # Utility functions
    /services/     # Business logic
    /types/        # TypeScript types
    /validations/  # Zod schemas

  /prisma/
    schema.prisma

  /public/
    /images/
    /videos/

  claude.md
  README.md
```

### 🎯 Naming Conventions

- **Components** → `PascalCase.tsx` (e.g., `RecipeCard.tsx`)
- **Files** → `kebab-case.tsx` (e.g., `recipe-list.tsx`)
- **Hooks** → `useSomething.ts` (e.g., `useRecipes.ts`)
- **Services** → `something.service.ts` (e.g., `recipe.service.ts`)
- **API endpoints** → `kebab-case` (e.g., `/api/v1/recipes`)
- **Zero inline CSS** — Tailwind only

### 🎨 Frontend Tech Stack

- **Next.js 16+** (App Router)
- **React 19+**
- **TypeScript**
- **TailwindCSS** (with RTL plugin already configured)
- **Shadcn/UI** (accessible components)
- **Server Components** (default for performance)
- **Client Components** (only when needed for interactivity)

**Design Requirements:**
- RTL enabled globally
- All content in Hebrew
- Fonts: Assistant or Alef
- Mobile-first, responsive design

### 🧩 Backend Tech Stack

- **Next.js API Routes** (`app/api/v1/...`)
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Zod** for validation
- Local uploads in dev
- Cloud object storage in production (Phase 2)

**API Architecture:**
- API Routes → Service Layer → Prisma → Database
- Clear separation of concerns
- Validation with Zod schemas
- Error handling middleware

### ⚙️ Build & Deployment Rules

- Environment separation (`.env.local`, `.env.production`)
- No secrets in code
- API versioning (`/api/v1/...`)
- Modular, scalable structure
- Docker support (Phase 3)

---

## 🐟 2. PRODUCT REQUIREMENTS

### 🎯 Purpose

This website serves a spearfishing community in Israel.

**Mission:**
- Share recipes of fish caught by members
- Educate members in fish handling, filleting, cleaning, preserving
- Provide video tutorials on cooking basics and advanced methods
- Create a central hub to store collective knowledge
- Increase enjoyment around preparing and eating the catch

**All UI text and content must be in Hebrew with RTL support.**

### 📑 Planned Pages

#### 1. דף הבית (Home Page)
**Route**: `/`

**Content**:
- Latest recipes
- Featured tutorial videos
- Community photos
- Intro message about the group
- Hero section with ocean imagery

---

#### 2. רשימת מתכונים (Recipes List)
**Route**: `/recipes`

**Features**:
- Grid/list view of all recipes
- Search bar
- Filters:
  - סוג הכנה (preparation type)
  - זמן (time)
  - רמת קושי (difficulty level)

**Tags**:
- אפייה (baking)
- טיגון (frying)
- גריל (grilling)
- עישון (smoking)
- פילה (filleting)
- ניקוי (cleaning)
- כבישה (pickling)
- מרק (soup)
- ועוד... (more)

---

#### 3. דף מתכון בודד (Single Recipe Page)
**Route**: `/recipes/[id]`

**Content**:
- Recipe title
- Author (fisherman name)
- Hero image + gallery
- Ingredients list
- Step-by-step instructions
- Notes from the fisherman
- Difficulty level
- Prep time + cook time
- Optional embedded video
- Comments section (Phase 2)

---

#### 4. סרטונים / מדריכים (Videos / Tutorials)
**Route**: `/videos`

**Categories**:
- ניקוי דגים (cleaning fish)
- פילה (filleting)
- עישון (smoking)
- גריל (grilling)
- בישול ביתי (home cooking)
- שיטות שימור (preservation methods)

**Features**:
- Video grid with thumbnails
- Filter by category
- Embedded YouTube or uploaded videos

---

#### 5. מדריכי יסוד (Basic Guides)
**Route**: `/tutorials`

**Topics**:
- Safety & hygiene basics
- Knife skills
- Filleting fundamentals
- How to store fish properly
- "From sea to plate" flow explanations

**Format**:
- Step-by-step guides
- Images and diagrams
- Video embeds

---

#### 6. אודות הקבוצה (About the Group)
**Route**: `/about`

**Content**:
- Who we are
- Why we cook together
- Our spearfishing values
- How to join
- Contact information

---

### 🔐 Admin Tools (Phase 2)

**Admin Dashboard** (`/admin`):
- Add/edit/delete recipes
- Upload images
- Upload videos or YouTube links
- Manage educational content
- User management

**User Roles**:
- **Admin**: Full control
- **Member**: Can submit recipes (pending approval)
- **Guest**: Read-only access

**Phase 3 Features**:
- Import content from WhatsApp messages
- Automated recipe extraction
- AI-powered recipe suggestions

---

### ✨ Design Philosophy

**Visual Theme**:
- Clean, modern, oceanic aesthetic
- Color palette: Blues, turquoise, sand tones
- Soft rounded cards
- Heavy emphasis on photography
- High-quality fish/food imagery

**Tech Approach**:
- Tailwind CSS + Shadcn components
- Mobile-first responsive design
- Fast loading times
- Accessibility (a11y) compliance
- SEO-optimized (Next.js metadata API)

---

## 🧠 3. BEHAVIOR RULES FOR CLAUDE

### ❗ Core Principles

1. **Do not assume features** — Only implement what's explicitly requested
2. **Ask before major decisions** — Architecture, data models, UI patterns
3. **Follow the MCP strictly** — This document is the source of truth
4. **Hebrew + RTL always** — All user-facing text in Hebrew
5. **Tailwind only** — No inline styles, no CSS modules
6. **Type-safe everything** — Full TypeScript coverage
7. **Mobile-first** — Design for mobile, enhance for desktop

### 🎯 When Starting New Features

1. Read the relevant section in this MCP
2. Ask clarifying questions if needed
3. Propose the approach (component structure, API design, etc.)
4. Wait for approval
5. Implement with clean, documented code

### 🔄 Code Quality Standards

- **Components**: Small, single-responsibility, well-named
- **Functions**: Pure when possible, typed parameters
- **Error Handling**: Try-catch in API routes, error boundaries in UI
- **Comments**: Only when code intent isn't obvious
- **Git Commits**: Clear, descriptive messages

### 📝 Development Workflow

1. **Feature Request** → Review MCP → Ask questions
2. **Design** → Propose component/API structure
3. **Implement** → Write clean, typed code
4. **Test** → Manual testing (automated tests in Phase 2)
5. **Review** → Check against MCP standards
6. **Commit** → Descriptive commit message

---

## 🔧 TECHNICAL SPECIFICATIONS

### Database Schema (Prisma)

**Core Models** (to be created):
- `Recipe`
- `User`
- `Video`
- `Tutorial`
- `Tag`
- `Comment` (Phase 2)

### API Endpoints Structure

```
/api/v1/
  /recipes
    GET    /          # List all recipes
    GET    /[id]      # Get single recipe
    POST   /          # Create recipe (admin)
    PUT    /[id]      # Update recipe (admin)
    DELETE /[id]      # Delete recipe (admin)

  /videos
    GET    /          # List all videos
    GET    /[id]      # Get single video
    POST   /          # Upload video (admin)

  /tutorials
    GET    /          # List all tutorials
    GET    /[id]      # Get single tutorial
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication (Phase 2)
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="..."

# File Upload (Phase 2)
CLOUDINARY_URL="..."
# or
AWS_S3_BUCKET="..."
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
```

---

## 🚀 DEVELOPMENT PHASES

### Phase 1: MVP (Current)
- [ ] Setup database schema
- [ ] Create basic page layouts
- [ ] Implement recipe listing
- [ ] Single recipe page
- [ ] Video tutorials page
- [ ] Basic guides page
- [ ] About page

### Phase 2: Enhanced Features
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Image uploads
- [ ] Video uploads
- [ ] Comments system
- [ ] Search and filtering

### Phase 3: Advanced
- [ ] WhatsApp import
- [ ] AI recipe extraction
- [ ] Community voting
- [ ] Recipe collections
- [ ] Print-friendly views

---

## 📚 REFERENCE

### Key Dependencies

```json
{
  "next": "16.0.3",
  "react": "19.2.0",
  "@prisma/client": "latest",
  "zod": "latest",
  "tailwindcss": "4.x",
  "tailwindcss-rtl": "latest",
  "@radix-ui/react-*": "latest",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

### Useful Commands

```bash
# Development
npm run dev

# Database
npx prisma migrate dev
npx prisma studio
npx prisma generate

# Build
npm run build
npm run start

# Linting
npm run lint
```

---

## ✅ CHECKLIST FOR CLAUDE

Before implementing ANY feature:

- [ ] Have I read the relevant MCP section?
- [ ] Do I understand the requirements fully?
- [ ] Have I asked clarifying questions?
- [ ] Is this feature documented in the MCP?
- [ ] Am I using Hebrew for all UI text?
- [ ] Am I following Next.js best practices?
- [ ] Am I using TypeScript correctly?
- [ ] Am I using Tailwind (no inline CSS)?
- [ ] Is the code mobile-first?
- [ ] Have I considered RTL implications?

---

## 🎯 SUCCESS CRITERIA

This project succeeds when:

1. **Community uses it daily** — Members actively share recipes
2. **Knowledge is preserved** — Tutorials and guides are accessible
3. **Easy to use** — Simple, intuitive interface (especially on mobile)
4. **Fast and reliable** — Quick loading, no bugs
5. **Scalable** — Can grow as community grows

---

**Remember**: This is a community project built with care. Every feature should serve the fishermen and their families. Keep it simple, beautiful, and useful.

🐟 **דג טוב, אוכל טוב!** (Good fish, good food!)
