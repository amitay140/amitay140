import { CookingMethod } from '../types';

const GENERIC_RECIPE_PLACEHOLDER = 'https://placehold.co/800x600/png';

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
        description: 'דניס טרי בסגנון פרואני מסורתי עם לימון, כוסברה ובצל אדום. מנה מרעננת וקלה להכנה.',
        prepTime: 20,
        cookTime: 0,
        difficulty: 'קל',
        fishType: 'דניס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER,
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '500 גרם דניס טרי, חתוך לקוביות',
          'מיץ מ-6 לימונים',
          'בצל אדום אחד, פרוס דק',
          'כוסברה טרייה קצוצה',
          'פלפל חריף (לפי הטעם)',
          'מלח ים אטלנטי',
          'פלפל שחור גרוס'
        ],
        instructions: [
          'חתכו את פילה הדניס לקוביות בגודל 1-2 ס"מ.',
          'בקערה, ערבבו את הדג עם מיץ הלימון והמלח.',
          'הניחו במקרר למנוחה של 15-20 דקות (הדג ילבין).',
          'הוסיפו את הבצל הפרוס, הכוסברה והפלפל החריף.',
          'ערבבו בעדינות, תקנו תיבול ומזגו מעט שמן זית מעל.',
          'הגישו מיד לצד נאצ\'וס או טוסטונים.'
        ]
      },
      {
        id: 'r2',
        title: 'סביצ\'ה לוקוס ים תיכונית',
        description: 'לוקוס לבן טרי בשילוב טעמים ים תיכוניים: עגבניות שרי, בזיליקום ושמן זית משובח.',
        prepTime: 15,
        cookTime: 0,
        difficulty: 'קל',
        fishType: 'לוקוס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER,
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '400 גרם פילה לוקוס טרי, נקי מעור ועצמות',
          'מיץ מ-4 לימונים',
          '10 עגבניות שרי חצויות',
          'חופן עלי בזיליקום טריים',
          '1 שן שום כתושה',
          'שמן זית איכותי',
          'זיתי קלמטה (אופציונלי)'
        ]
      },
      {
        id: 'r3',
        title: 'סשימי אינטיאס עם הדרים',
        description: 'פרוסות דקות של אינטיאס טרי ברוטב סויה הדרים (פונזו) וג\'ינג\'ר.',
        prepTime: 25,
        cookTime: 0,
        difficulty: 'מתקדם',
        fishType: 'אינטיאס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '300 גרם פילה אינטיאס (החלק העליון)',
          'רוטב סויה איכותי',
          'מיץ תפוזים סחוט טרי',
          'ג\'ינג\'ר מגורד טרי',
          'שומשום קלוי',
          'בצל ירוק קצוץ'
        ]
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
        title: 'שניצל דג (פיש אנד צ\'יפס)',
        description: 'רצועות דג לבן בציפוי פריך וזהוב של בירה וקמח, מוגש עם רוטב טרטר.',
        prepTime: 20,
        cookTime: 10,
        difficulty: 'בינוני',
        fishType: 'קוד / דניס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER,
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '500 גרם פילה דג לבן יציב',
          '1 כוס קמח',
          '1 בקבוק בירה לבנה קרה',
          'מלח ופלפל',
          'שמן לטיגון עמוק'
        ],
        instructions: [
          'מערבבים בקערה את הקמח והבירה עד לקבלת בלילה סמיכה ואחידה.',
          'מחממים שמן עמוק בסיר.',
          'מתבלים את נתחי הדג במלח ופלפל.',
          'טובלים כל נתח בבלילה ומכניסים בזהירות לשמן החם.',
          'מטגנים כ-4-5 דקות עד להזהבה יפה.',
          'מוציאים לנייר סופג ומגישים חם.'
        ]
      },
      {
        id: 'r5',
        title: 'ברבוניות מטוגנות',
        description: 'דגי ברבוניה קטנים שלמים, מקומחים ומטוגנים קריספי. נשנוש מושלם.',
        prepTime: 10,
        cookTime: 15,
        difficulty: 'קל',
        fishType: 'ברבוניה',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
           GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '1 ק"ג ברבוניות נקיות',
          'קמח לבן לקימוח',
          'מלח',
          'שמן עמוק לטיגון',
          'לימון להגשה'
        ]
      },
      {
        id: 'r6',
        title: 'פילה מוסר צרוב במחבת',
        description: 'פילה מוסר עסיסי צרוב על העור עם חמאה, שום ורוזמרין.',
        prepTime: 10,
        cookTime: 8,
        difficulty: 'קל',
        fishType: 'מוסר',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'baking',
    name: 'אפייה',
    description: 'אפייה בתנור - שיטה בריאה ופשוטה שמשמרת את טעמי הדג הטבעיים ומתאימה לארוחות משפחתיות.',
    icon: '🔥',
    recipes: [
      {
        id: 'r7',
        title: 'דניס שלם בתנור עם ירקות שורש',
        description: 'ארוחה שלמה בתבנית אחת: דניס עסיסי על מצע של תפוחי אדמה, גזר ובצל.',
        prepTime: 20,
        cookTime: 40,
        difficulty: 'קל',
        fishType: 'דניס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER,
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '2 דגי דניס שלמים נקיים',
          '4 תפוחי אדמה פרוסים דק',
          '2 גזרים פרוסים',
          '1 בצל גדול פרוס לטבעות',
          '5 שיני שום שלמות',
          'שמן זית',
          'רוזמרין וטימין',
          'מלח ופלפל גרוס'
        ],
        instructions: [
          'מחממים תנור ל-200 מעלות.',
          'מסדרים את הירקות בתבנית, מזלפים שמן זית ומתבלים.',
          'חורצים את הדגים משני הצדדים ומכניסים עשבי תיבול ושום לבטן הדג.',
          'מניחים את הדגים על הירקות, ומושחים גם אותם בשמן זית ותבלינים.',
          'אופים כ-35-40 דקות עד שהדג מוכן והירקות רכים.'
        ]
      },
      {
        id: 'r8',
        title: 'פילה לוקוס ברוטב עגבניות וחצילים',
        description: 'תבשיל קדרת דגים עשיר בטעמים, מושלם לערב שבת.',
        prepTime: 15,
        cookTime: 30,
        difficulty: 'בינוני',
        fishType: 'לוקוס',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ]
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
        title: 'לברק שלם על הגריל',
        description: 'לברק שלם צלוי בפשטות עם שמן זית, לימון ועשבי תיבול. הטעם של הים.',
        prepTime: 10,
        cookTime: 15,
        difficulty: 'בינוני',
        fishType: 'לברק',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ],
        ingredients: [
          '2 דגי לברק שלמים (כ-500 גרם כ"א)',
          'שמן זית בנדיבות',
          'מלח ים גס',
          'ענפי תימין ורוזמרין',
          'פרוסות לימון'
        ],
        instructions: [
          'מחממים את הגריל לחום גבוה.',
          'חורצים את הדגים באלכסון (3 חריצים בכל צד).',
          'ממלאים את בטן הדג בעשבי התיבול והלימון.',
          'מורחים את הדגים בשמן זית ומפזרים מלח גס.',
          'צולים כ-6-7 דקות מכל צד, עד שהעור קריספי והבשר נפרד מהעצם.'
        ]
      },
      {
        id: 'r10',
        title: 'שיפודי סלמון בטריאקי',
        description: 'קוביות סלמון עסיסיות במרינדת טריאקי וסויה, צלויות על האש.',
        prepTime: 20,
        cookTime: 8,
        difficulty: 'קל',
        fishType: 'סלמון',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ]
      },
      {
        id: 'r11',
        title: 'סטייק טונה צרוב',
        description: 'סטייק טונה אדומה צרוב קלות (מדיום-רייר) עם פלפל גרוס.',
        prepTime: 5,
        cookTime: 4,
        difficulty: 'מתקדם',
        fishType: 'טונה',
        image: GENERIC_RECIPE_PLACEHOLDER,
        images: [
          GENERIC_RECIPE_PLACEHOLDER
        ]
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
