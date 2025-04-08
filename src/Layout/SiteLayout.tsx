import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header"; // همون header ساده سایت
// import Footer from "../components/Footer"; // اختیاری، اگه داری

const SiteLayout: React.FC = () => {
  return (
    <>
      <Header onToggle={function (): void {
              throw new Error("Function not implemented.");
          } } title={""} logoUrl={""} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer title={""} background={""} /> 
    </>
  );
};

export default SiteLayout;
