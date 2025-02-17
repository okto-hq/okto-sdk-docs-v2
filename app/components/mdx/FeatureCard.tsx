import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  iconColor = "text-blue-500",
}: FeatureCardProps) {
  return (
    <div className="px-4 py-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all">
      <div className="flex flex-col">
        <div className="flex items-start gap-3">
          <div className={`${iconColor} flex-shrink-0`}>{icon}</div>
          <h3 className="text-sm font-bold m-0">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
      </div>
    </div>
  );
}