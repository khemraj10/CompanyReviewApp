import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white">
        <Navbar />
      </header>
      <main className="grow p-20">{children}</main>
    </div>
  );
};

export default MainLayout;
