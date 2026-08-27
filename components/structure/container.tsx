interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <div className={`w-full min-w-0 ${className}`}>
      {children}
    </div>
  );
}
