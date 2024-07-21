import Header from "./_components/header";
import SideNav from "./_components/sidenav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
