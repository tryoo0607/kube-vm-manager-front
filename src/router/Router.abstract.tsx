import {NonIndexRouteObject,IndexRouteObject} from 'react-router-dom';

export interface RouteInfoObject extends NonIndexRouteObject {
  title: string
  children?: RouteInfoObject[]
}

export interface RouteInfoIndexObject extends IndexRouteObject {
  title: string
}
