import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
   
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="mt-4">
          <ul>
            <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link></li>
            <li><Link to="/users" className="block py-2 px-4 hover:bg-gray-700">Users</Link></li>
            <li><Link to="/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
