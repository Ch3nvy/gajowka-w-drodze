import { Outlet } from "react-router-dom";
import TopNav from "../top-nav/TopNav";
import SideBar from "../side-bar/SideBar";

export default function Layout() {
  return (
    <div className="flex container mx-auto h-screen w-screen">
      <SideBar />
      <div className="flex flex-col h-full w-full">
        <TopNav />
        <main className="h-full w-full border-2 border-green-500">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
