import './Lnb.scss';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {RouteInfoObject} from '../../../router/Router.abstract.tsx';
import {useMemo} from 'react';

export interface LnbProps {
  lnbObject: RouteInfoObject | undefined
}

const Lnb = (props: LnbProps) => {

  const lnbMenu = useMemo(() => {

    return props.lnbObject?.children ? props.lnbObject.children : [];

  },[props.lnbObject]);

  return (
    <aside className={'kvm-lnb'}>
      <List>
        {lnbMenu.map((info) => (
          <ListItem key={info.title} disablePadding>
            <ListItemButton>
              <ListItemText primary={info.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};

export default Lnb;