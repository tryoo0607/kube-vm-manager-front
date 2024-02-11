import CommonLayout from '../../common/layout/common-layout/CommonLayout.tsx';
import {RouteInfoObject} from '../Router.abstract.tsx';

/* LNB */
import VmRouteInfo from './lnb/VmRouteInfo.tsx';
import LogsRouteInfo from './lnb/LogsRouteInfo.tsx';
import Test from '../../pages/Test.tsx';

const GnbRouteInfo: RouteInfoObject[] = [
  {
    title: 'root',
    path: '/',
    element: <CommonLayout/>,
    children: [
      {
        title: 'test',
        path: 'test',
        element: <Test/>,
      }
    ]
  },
  {
    /* Route to '/virtual-machine' */
    title: 'VM 관리',
    path: '/virtual-machine',
    element: <CommonLayout lnb/>,
    children: VmRouteInfo
  },
  {
    /* Route to '/logs' */
    title: 'Log 관리',
    path: '/logs',
    element: <CommonLayout lnb/>,
    children: LogsRouteInfo
  }
];

export default GnbRouteInfo;