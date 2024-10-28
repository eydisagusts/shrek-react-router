
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-[#5C4033] p-8 w-full fixed bottom-0">
        {children}
      </div>
    );
  }
  