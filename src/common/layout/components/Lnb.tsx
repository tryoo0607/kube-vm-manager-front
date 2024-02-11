import './Lnb.scss';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {RouteInfoObject} from '../../../router/Router.abstract.tsx';
import React, {useCallback, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export interface LnbProps {
  lnbObject: RouteInfoObject
}

const Lnb = (props: LnbProps) => {

  // Hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Privates
  const routeTo = useCallback((url: string) => {
    const currentLocation = location.pathname.split('/');

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


  // Template
  const lnbMenu = useMemo(() => {

    return props.lnbObject?.children ? props.lnbObject.children : [];

  },[props.lnbObject]);

  return (
    <aside className={'kvm-lnb'}>
      <List>
        {lnbMenu.map((info) => (
          <ListItem key={info.title} disablePadding>
            <ListItemButton onClick={() => onClickMenu(info.path ? info.path : '')}>
              <ListItemText primary={info.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default React.memo(Lnb);