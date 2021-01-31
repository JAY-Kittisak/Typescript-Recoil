import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';

import Logo from './components/Logo';
import { logoAnimationState } from './recoil/atoms';
import './App.css';
import { Tattoo } from './components/Tattoo';
import Counter from './components/counter';

function App() {
  const [logoAnimation, setLogoAnimation] = useRecoilState(logoAnimationState);

  const toggleAnimation = () => {
    setLogoAnimation(!logoAnimation);
  };

  return (
    <RecoilRoot>
      <div className='App'>
        <header className='App-header'>
          <Logo />
          <button className='App-button' onClick={toggleAnimation}>
            Toggle animation
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Tattoo/>
          <Counter />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;