
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-green-800 p-8 w-full top-0">
      {children}
    </div>
  );
}
