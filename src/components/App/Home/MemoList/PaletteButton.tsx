import React from 'react';
import { PaletteIcons } from '../../../shared/atoms/PaletteIcons';

export const PaletteButton = () => {
  return(
    <button
            className=" p-2 group hover:bg-gray-200 rounded-full relative">
      <PaletteIcons />
    </button>
  );
}
