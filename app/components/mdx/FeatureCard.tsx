import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  link?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  iconColor = "text-blue-500",
  link,
}: FeatureCardProps) {
  const CardContent = () => (
    <div className="flex flex-col" id={title} >
      <div className="flex items-start gap-3">
        <div className={`${iconColor} flex-shrink-0`}>{icon}</div>
        <h3 className="text-sm font-bold m-0  ">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
    </div>
  );

  const cardClasses = "px-4 py-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-sm hover:shadow-md";

  return link ? (
    <Link href={link} className="no-underline not-prose feature-card-analytics-tracker" id={title}>
      <div className={`${cardClasses} cursor-pointer hover:transform hover:translate-y-[-2px]`}>
        <CardContent />
      </div>
    </Link>
  ) : (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
}