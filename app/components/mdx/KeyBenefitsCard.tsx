import React from 'react';

type KeyBenefitCardProps = {
  title: string;
  points: string[];
};

type KeyBenefitsGridProps = {
  children: React.ReactElement<KeyBenefitCardProps>[];
};

export function KeyBenefitCard({ title, points }: KeyBenefitCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg p-6 border border-zinc-200 dark:border-zinc-700 rounded-2xl h-full">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="flex-1 font-semibold text-xl">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-700 dark:text-white list-disc list-inside">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function KeyBenefitsGrid({ children }: KeyBenefitsGridProps) {
  return (
    <div className="gap-6 grid grid-cols-1 mt-6 overflow-x-auto">
      {children}
    </div>
  );
}
