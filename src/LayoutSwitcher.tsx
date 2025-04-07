// LayoutSwitcher.tsx
import { useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';

import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AppHeader from 'Layout/AppHeader';

const LayoutSwitcher = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith('/admin-panel');

  return (
    <>
      {isDashboard ? <AppHeader /> : <Header onToggle={function (): void {
              throw new Error('Function not implemented.');
          } } title={''} logoUrl={''} />}
      
      <main className="min-h-screen">
        <Outlet />
      </main>
      
      {!isDashboard && <Footer title={'borhan'} background={''} />}
    </>
  );
};

export default LayoutSwitcher;
