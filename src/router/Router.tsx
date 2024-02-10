import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RouterInfo} from './path/RouterInfo';

const RouterObject = createBrowserRouter(RouterInfo);

const Router = () => {
  return (
    <RouterProvider router={RouterObject}/>
  );
};

export default Router;