import Header from '../../outlines/admin/Header';
import AdminOnly from '../../components/authority/AdminOnly';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../outlines/admin/SideMunu';

const CommonLayout = () => {
  return (
    <AdminOnly>
      <Header />
      <main className="admin_page">
        <SideMenu />
        <section>
          <Outlet />
        </section>
      </main>
    </AdminOnly>
  );
};

export default CommonLayout;
