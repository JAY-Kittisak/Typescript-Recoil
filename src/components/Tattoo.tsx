import React, { FC } from 'react'
import { useRecoilState } from 'recoil';

import { atomTattooState } from '../recoil/atoms';
import { typeTattoo } from '../model/typeTattoo'
import { TattooItem } from './tattoo/TattooItem'

const tattoo1: typeTattoo = {
    title : 'Love is a like tattoo'
}

export const Tattoo = () => {
    const [atomTattoo, setAtomTattoo] = useRecoilState(atomTattooState);

  const toggleAnimation = () => {
    setAtomTattoo(!atomTattoo);
  };
 return (
        <div>
            <TattooItem tattoo={tattoo1}/>
        </div>
    )
}