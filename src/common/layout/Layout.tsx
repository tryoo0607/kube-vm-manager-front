import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Lnb from './Lnb.tsx';
import './Layout.scss';

const Layout = (props: {
  children: React.ReactNode
}) => {
  return(
    <section className={'common-layout'}>
      <Header/>
      <section className={'common-layout__content'}>
        <Lnb/>
        <main className={'common-layout__content__main'}>
          {props.children}
        </main>
      </section>

      <Footer/>
    </section>
  );
};

export default Layout;