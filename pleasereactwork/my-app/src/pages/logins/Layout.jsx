import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav className="flex justify-between items-center bg-blue-200 py-4 px-8">
                <h1 className="text-2xl font-bold">Registration App</h1>
                <div>
                    <Link to="/dashboard/student" className="text-blue-500 hover:underline mr-4">Student Dashboard</Link>
                    <Link to="/dashboard/admin" className="text-blue-500 hover:underline">Admin Dashboard</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
