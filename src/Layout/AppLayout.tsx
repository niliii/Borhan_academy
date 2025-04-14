import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
     
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <SidebarProvider>
          <LayoutContent />
        </SidebarProvider>
        <main className="p-4 overflow-auto flex-1">
         
        </main>
      </div>
    </div>
    //   <div className="flex">
    //   <AppSidebar />
    //   <main className="flex-1">
    //   <Outlet />
    //     <AppHeader />
    //     <SidebarProvider>
    //     <LayoutContent />
    //   </SidebarProvider>

    //   </main>
    // </div>
  );
};

export default AppLayout;
