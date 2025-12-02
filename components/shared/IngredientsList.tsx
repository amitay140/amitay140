'use client';

import { useState } from 'react';
import { ScrollText, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IngredientsListProps {
  ingredients: string[];
}

export function IngredientsList({ ingredients }: IngredientsListProps) {
  // Track checked state by index
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(ingredients.length).fill(false)
  );

  const toggleItem = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 sticky top-24 shadow-2xl ring-1 ring-white/10">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-700 pb-4">
        <ScrollText className="w-6 h-6 text-amber-500" />
        <span>מרכיבים</span>
      </h2>
      <ul className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            onClick={() => toggleItem(index)}
            className={cn(
              "flex items-start gap-4 pb-3 last:pb-0 cursor-pointer group select-none transition-all duration-200",
              checkedItems[index] ? "opacity-50" : "opacity-100"
            )}
          >
            {/* Custom Checkbox */}
            <div
              className={cn(
                "w-6 h-6 mt-1 flex-shrink-0 rounded-md border-2 flex items-center justify-center transition-colors duration-200",
                checkedItems[index]
                  ? "bg-amber-500 border-amber-500"
                  : "border-slate-600 group-hover:border-amber-500/50"
              )}
            >
              {checkedItems[index] && <Check className="w-4 h-4 text-slate-900" strokeWidth={3} />}
            </div>

            {/* Text */}
            <span
              className={cn(
                "font-medium text-lg leading-relaxed transition-all duration-200",
                checkedItems[index] ? "line-through text-slate-500" : "text-slate-200"
              )}
            >
              {ingredient}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
