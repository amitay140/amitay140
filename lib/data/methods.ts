import { CookingMethod } from '../types';

export const cookingMethods: CookingMethod[] = [
  {
    id: '1',
    slug: 'ceviche',
    name: 'סביצ\'ה',
    description: 'שיטת הכנה קרה בה הדג "מתבשל" במיץ לימון או ליים חמוץ. מתאים במיוחד לדגים טריים ואיכותיים.',
    icon: '🍋',
    recipes: [
      {
        id: 'r1',
        title: 'סביצ\'ה דניס קלאסית',
        description: 'דניס טרי בסגנון פרואני מסורתי עם לימון, כוסברה ובצל אדום',
        prepTime: 20,
        cookTime: 0,
        difficulty: 'קל',
        fishType: 'דניס',
        images: [
          'https://placehold.co/800x600/0ea5e9/white.png?text=Ceviche+Dish',
          'https://placehold.co/600x800/06b6d4/white.png?text=Fresh+Fish',
          'https://placehold.co/800x600/0284c7/white.png?text=Ingredients',
          'https://placehold.co/600x800/0369a1/white.png?text=Preparation',
          'https://placehold.co/800x600/075985/white.png?text=Final+Plate'
        ],
        ingredients: [
          '500 גרם דניס טרי, חתוך לקוביות',
          'מיץ מ-6 לימונים',
          'בצל אדום אחד, פרוס דק',
          'כוסברה טרייה',
          'פלפל חריף (אופציונלי)',
          'מלח ופלפל שחור'
        ],
        instructions: [
          'חתכו את הדניס לקוביות של 1-2 ס"מ',
          'מערבבים עם מיץ הלימון ומלח',
          'משאירים במקרר ל-15-20 דקות',
          'מוסיפים בצל, כוסברה ופלפל',
          'מגישים מיד עם צ\'יפס או טורטיה'
        ]
      },
      {
        id: 'r2',
        title: 'סביצ\'ה לוקוס ים תיכונית',
        description: 'לוקוס בסגנון ים תיכוני עם עגבניות שרי ובזיליקום',
        prepTime: 15,
        cookTime: 0,
        difficulty: 'קל',
        fishType: 'לוקוס',
        ingredients: [
          '400 גרם לוקוס טרי',
          'מיץ מ-4 לימונים',
          'עגבניות שרי',
          'בזיליקום טרי',
          'שום',
          'שמן זית'
        ]
      },
      {
        id: 'r3',
        title: 'סביצ\'ה אמנון חריפה',
        description: 'אמנון עם פלפלים חריפים וג\'ינג\'ר בסגנון אסייתי',
        prepTime: 25,
        cookTime: 0,
        difficulty: 'בינוני',
        fishType: 'אמנון'
      }
    ]
  },
  {
    id: '2',
    slug: 'frying',
    name: 'טיגון',
    description: 'טיגון במחבת או בשמן עמוק. יוצר קרום פריך וטעים תוך שמירה על עסיסיות הדג.',
    icon: '🍳',
    recipes: [
      {
        id: 'r4',
        title: 'פילה דניס מטוגן בפירורי לחם',
        description: 'פילה דניס פריך ומוזהב עם תיבול ים תיכוני',
        prepTime: 15,
        cookTime: 10,
        difficulty: 'קל',
        fishType: 'דניס',
        images: [
          'https://placehold.co/800x600/f59e0b/white.png?text=Fried+Fish',
          'https://placehold.co/600x800/d97706/white.png?text=Raw+Fillet',
          'https://placehold.co/800x600/b45309/white.png?text=Breading+Station',
          'https://placehold.co/600x800/92400e/white.png?text=Frying+Pan'
        ],
        ingredients: [
          'פילה דניס',
          'קמח',
          'ביצים',
          'פירורי לחם',
          'שום',
          'פטרוזיליה',
          'שמן לטיגון'
        ],
        instructions: [
          'מכינים שלוש קערות: קמח, ביצים מוקצפות, פירורי לחם מתובלים',
          'טובלים כל פילה בקמח, ביצה ופירורי לחם',
          'מטגנים במחבת עם שמן חם 3-4 דקות מכל צד',
          'מסננים על נייר סופג',
          'מגישים עם לימון וטרטר'
        ]
      },
      {
        id: 'r5',
        title: 'דג שלם מטוגן',
        description: 'דניס או לוקוס שלם מטוגן בשמן עמוק עד פריכות',
        prepTime: 10,
        cookTime: 15,
        difficulty: 'בינוני',
        fishType: 'דניס / לוקוס'
      },
      {
        id: 'r6',
        title: 'פילה מוסר מוקפץ',
        description: 'פילה מוסר עם שום, חמאה ויין לבן',
        prepTime: 10,
        cookTime: 8,
        difficulty: 'קל',
        fishType: 'מוסר'
      }
    ]
  },
  {
    id: '3',
    slug: 'baking',
    name: 'אפייה',
    description: 'אפייה בתנור - שיטה בריאה ופשוטה שמשמרת את טעמי הדג הטבעיים.',
    icon: '🔥',
    recipes: [
      {
        id: 'r7',
        title: 'דניס בתנור עם לימון וזעתר',
        description: 'דג שלם אפוי עם ירקות שורש',
        prepTime: 15,
        cookTime: 35,
        difficulty: 'קל',
        fishType: 'דניס',
        ingredients: [
          'דניס שלם',
          'לימון',
          'זעתר',
          'שום',
          'ירקות שורש',
          'שמן זית'
        ],
        instructions: [
          'מחממים תנור ל-180 מעלות',
          'מתבלים את הדג במלח, פלפל וזעתר',
          'ממלאים את הדג בפרוסות לימון ושום',
          'מניחים על מצע ירקות',
          'אופים 30-35 דקות עד שהדג מוכן'
        ]
      },
      {
        id: 'r8',
        title: 'פילה לוקוס עם קרום פרמזן',
        description: 'פילה אפוי עם ציפוי פרמזן ופטרוזיליה',
        prepTime: 10,
        cookTime: 20,
        difficulty: 'קל',
        fishType: 'לוקוס'
      }
    ]
  },
  {
    id: '4',
    slug: 'grilling',
    name: 'גריל',
    description: 'צלייה על גריל או פחמים. מעניקה טעם מעושן מיוחד וקרום פריך.',
    icon: '🔥',
    recipes: [
      {
        id: 'r9',
        title: 'דניס על הגריל',
        description: 'דג שלם צלוי עם עשבי תיבול',
        prepTime: 10,
        cookTime: 20,
        difficulty: 'בינוני',
        fishType: 'דניס',
        images: [
          'https://placehold.co/800x600/ef4444/white.png?text=Grilled+Fish',
          'https://placehold.co/600x800/dc2626/white.png?text=Fresh+Catch',
          'https://placehold.co/800x600/b91c1c/white.png?text=Seasoning',
          'https://placehold.co/600x800/991b1b/white.png?text=On+The+Grill',
          'https://placehold.co/800x600/7f1d1d/white.png?text=Plated'
        ],
        ingredients: [
          'דניס שלם',
          'שמן זית',
          'לימון',
          'עשבי תיבול טריים',
          'מלח פלפל'
        ],
        instructions: [
          'מחממים את הגריל היטב',
          'משמנים את הדג ומתבלים',
          'צולים 8-10 דקות מכל צד',
          'בודקים שהבשר מתקלף בקלות',
          'מגישים עם סלט ירקות'
        ]
      },
      {
        id: 'r10',
        title: 'שיפודי סלמון',
        description: 'קוביות סלמון צלויות עם ירקות',
        prepTime: 20,
        cookTime: 12,
        difficulty: 'קל',
        fishType: 'סלמון'
      },
      {
        id: 'r11',
        title: 'סטייק טונה צלוי',
        description: 'סטייק טונה צלוי מבחוץ, נא מבפנים',
        prepTime: 5,
        cookTime: 6,
        difficulty: 'מתקדם',
        fishType: 'טונה'
      }
    ]
  }
];

// Helper function to get method by slug
export function getMethodBySlug(slug: string): CookingMethod | undefined {
  return cookingMethods.find(method => method.slug === slug);
}

// Helper function to get all method slugs (useful for static generation)
export function getAllMethodSlugs(): string[] {
  return cookingMethods.map(method => method.slug);
}

// Helper function to get all recipes across all methods
export function getAllRecipes() {
  return cookingMethods.flatMap(method =>
    method.recipes.map(recipe => ({
      ...recipe,
      methodSlug: method.slug,
      methodName: method.name,
      methodIcon: method.icon
    }))
  );
}

// Helper function to get recipe by ID
export function getRecipeById(id: string) {
  for (const method of cookingMethods) {
    const recipe = method.recipes.find(r => r.id === id);
    if (recipe) {
      return {
        ...recipe,
        methodSlug: method.slug,
        methodName: method.name,
        methodIcon: method.icon
      };
    }
  }
  return undefined;
}

// Helper function to get all recipe IDs (useful for static generation)
export function getAllRecipeIds(): string[] {
  return cookingMethods.flatMap(method => method.recipes.map(r => r.id));
}
