import './Lnb.scss';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {RouteInfoObject} from '../../../router/Router.abstract.tsx';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export interface LnbProps {
  lnbObject: RouteInfoObject
}

const Lnb = (props: LnbProps) => {

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState<string[]>(location.pathname.split('/'));


  // Privates
  const routeTo = useCallback((url: string) => {

    if(currentLocation[currentLocation.length -1] === url) {
      navigate(url, {replace: true});
    } else {
      navigate(url);
    }

  }, [location, navigate]);


  // Events
  const onClickMenu = useCallback((path: string) => {

    routeTo(path);

  },[routeTo]);


  // Templates
  const lnbMenu = useMemo(() => {

    return props.lnbObject?.children ? props.lnbObject.children : [];

  },[props.lnbObject]);


  // LifeCycles
  useEffect(() => {
    setCurrentLocation(location.pathname.split('/'));
  }, [setCurrentLocation, location]);


  return (
    <aside className={'kvm-lnb'}>
      <List>
        {lnbMenu.map((info) => (
          <ListItem key={info.title} disablePadding>
            <ListItemButton selected={currentLocation[currentLocation.length -1] === info.path} onClick={() => onClickMenu(info.path ? info.path : '')}>
              <ListItemText primary={info.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default React.memo(Lnb);