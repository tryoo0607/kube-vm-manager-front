import './Header.scss';
import {Avatar, Icon, Tab, Tabs} from '@mui/material';
import GnbRouteInfo from '../../../router/path/RouteInfo.tsx';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as React from 'react';

export interface HeaderProps {
  currentLocation: string
}

const Header = (props: HeaderProps) => {

  // Hooks
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState<string | boolean>(false);

  // Privates

  const routeTo = useCallback((url: string) => {

    navigate(url);

  }, [navigate]);

  // Event
  const onClickLogo = useCallback(() => {

    routeTo('/');

  }, [routeTo]);

  const onClickMenu = useCallback((_event: React.SyntheticEvent, newValue: string) => {

    routeTo(newValue);

  }, [routeTo]);

  // Lifecycle
  useEffect(() => {

    if(props.currentLocation === '/' || props.currentLocation === '') {
      setTabValue(false);
    } else {
      setTabValue(props.currentLocation);
    }

  }, [props.currentLocation]);

  return (
    <header className={'kvm-header'}>
        <div className={'kvm-header__logo-container'} onClick={onClickLogo}>
            <div className={'kvm-header__logo-container__logo'}>
              <Icon fontSize={'large'}>settings_application</Icon>
            </div>
            <div className={'kvm-header__logo-container__text'}>Kube VM Manager</div>
        </div>
        <div className={'kvm-header__menu-container'}>
          <Tabs value={tabValue} centered onChange={onClickMenu}>
            {GnbRouteInfo.map((info) => (
              info.title !== 'root' && (
                <Tab label={info.title} value={info.path} key={info.path}/>
              )
            ))}
          </Tabs>
        </div>
        <div className={'kvm-header__info-container'}>
          <Avatar></Avatar>
        </div>
    </header>
  );
};

export default React.memo(Header);