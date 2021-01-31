import React,  {FC}  from 'react'
import { useRecoilValue } from 'recoil';

import { atomTattooState } from '../../recoil/atoms';
import { typeTattoo } from '../../model/typeTattoo'

export const TattooItem: React.FC<{tattoo:typeTattoo}> = ({tattoo}: {tattoo:typeTattoo}) => {
    const TattooState = useRecoilValue(atomTattooState);
    return <div>{tattoo.title}, "&" ,{TattooState}</div>
}