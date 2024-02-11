import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GnbRouteInfo from './path/RouteInfo.tsx';

const RouterObject = createBrowserRouter(GnbRouteInfo);

const Router = () => {
  return (
    <RouterProvider router={RouterObject}/>
  );
};

export default Router;