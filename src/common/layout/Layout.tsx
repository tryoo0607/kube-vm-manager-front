import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Lnb from './Lnb.tsx';
import './Layout.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return(
    <section className={'common-layout'}>
      <Header/>
      <section className={'common-layout__content'}>
        <Lnb/>
        <main className={'common-layout__content__main'}>
          <Outlet/>
        </main>
      </section>

      <Footer/>
    </section>
  );
};

export default Layout;