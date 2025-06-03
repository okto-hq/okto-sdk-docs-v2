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
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
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
    <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-1">
      {children}
    </div>
  );
}
