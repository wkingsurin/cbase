interface MainProps {
  className?: string;
  children: React.ReactNode;
}

export default function Main({ className = "", children }: MainProps) {
  return <main className={`flex p-2 ${className}`}>{children}</main>;
}
