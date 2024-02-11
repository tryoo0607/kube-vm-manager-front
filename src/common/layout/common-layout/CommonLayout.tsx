import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Lnb from '../components/Lnb.tsx';
import './CommonLayout.scss';
import {Outlet, useLocation} from 'react-router-dom';
import {useEffect, useMemo, useState} from 'react';
import GnbRouteInfo from '../../../router/path/RouteInfo.tsx';

export interface CommonLayoutProps {
  lnb?: boolean
}

const CommonLayout = (props: CommonLayoutProps) => {

  // Hooks
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const rootGnb = GnbRouteInfo[0];

  // Privates
  const currentLnbMenus = useMemo(() => {
    const menus = GnbRouteInfo.find(item => item.path === currentLocation);

    return menus ? menus : rootGnb;
  },[currentLocation]);


  // Lifecycle
  useEffect(() => {
    const currentLocationArray: string[] = location.pathname.split(/(?=\/)/);
    setCurrentLocation(currentLocationArray[0]);

  }, [location, setCurrentLocation]);


  return(
    <section className={'common-layout'}>
      <Header currentLocation={currentLocation}/>
      <section className={'common-layout__content'}>
        {
          props.lnb && (
            <Lnb lnbObject={currentLnbMenus}/>
          )
        }
        <main className={'common-layout__content__main'}>
          <Outlet/>
        </main>
      </section>
      <Footer/>
    </section>
  );
};

export default CommonLayout;