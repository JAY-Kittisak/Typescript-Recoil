import React from 'react';
import { useRecoilValue } from 'recoil';

import logo from '../logo.svg';
import { logoAnimationState } from '../recoil/atoms';

const Logo = () => {
  const logoAnimation = useRecoilValue(logoAnimationState);

  return (
    <div>
      <img src={logo} className={'App-logo ' + (logoAnimation ? 'App-logo-animate' : null)} alt='logo' />
      
    </div>
  );
};

export default Logo;