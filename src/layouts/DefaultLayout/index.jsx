import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-background-dark">
      <Header />
      <main className="flex-1 max-w-310 w-full mx-auto px-6">
        <Outlet />
      </main>
    </div>
  );
}
