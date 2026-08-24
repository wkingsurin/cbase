interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <div className={`min-w-[calc(100dvh-140px-16px-16px)] ${className}`}>
      {children}
    </div>
  );
}
