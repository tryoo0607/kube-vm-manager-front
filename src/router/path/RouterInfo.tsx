import Layout from '../../common/layout/Layout.tsx';
import {RouteObject} from 'react-router-dom';
import Test from '../../pages/Test.tsx';

export const RouterInfo: RouteObject[] = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Test/>
      }
    ]
  },
];