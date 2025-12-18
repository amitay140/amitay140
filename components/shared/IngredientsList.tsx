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
    <div className="bg-white text-slate-900 rounded-3xl p-8 sticky top-24 shadow-xl border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
        <ScrollText className="w-6 h-6 text-blue-600" />
        <span>מרכיבים</span>
      </h2>
      <ul className="space-y-4">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            onClick={() => toggleItem(index)}
            className={cn(
              "flex items-start gap-4 pb-3 last:pb-0 cursor-pointer group select-none transition-all duration-200 border-b border-slate-50 last:border-0",
              checkedItems[index] ? "opacity-50" : "opacity-100"
            )}
          >
            {/* Custom Checkbox */}
            <div
              className={cn(
                "w-6 h-6 mt-1 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                checkedItems[index]
                  ? "bg-blue-600 border-blue-600"
                  : "border-slate-300 bg-slate-50 group-hover:border-blue-400"
              )}
            >
              {checkedItems[index] && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>

            {/* Text */}
            <span
              className={cn(
                "font-medium text-lg leading-relaxed transition-all duration-200",
                checkedItems[index] ? "line-through text-slate-400" : "text-slate-700 group-hover:text-slate-900"
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
