import React from 'react';

type KeyBenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  points: string[];
};

type KeyBenefitsGridProps = {
  children: React.ReactElement<KeyBenefitCardProps>[];
};

// Reusable Linked Card Component
export function KeyBenefitCard({ icon, title, points }: KeyBenefitCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 h-full">
        <div className="flex items-center gap-3 mb-4">
        <div className="text-xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white-300">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
  );
}

// Grid Wrapper Component
export default function KeyBenefitsGrid({ children }: KeyBenefitsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 overflow-x-auto">
      {children}
    </div>
  );
}
