interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className = "", children }: SectionProps) {
  return <div className={`${className}`}>{children}</div>;
}
