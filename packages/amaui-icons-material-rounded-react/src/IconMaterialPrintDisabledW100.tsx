import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 15.7H4.8q-.325 0-.537-.212-.213-.213-.213-.538V10.5q0-.725.487-1.213Q5.025 8.8 5.75 8.8H7.8L3.375 4.375q-.1-.1-.1-.225T3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3.4-3.4.5-.5v1.5q0 .625-.438 1.062-.437.438-1.062.438H8.8q-.625 0-1.062-.438Q7.3 18.825 7.3 18.2Zm.7-1.4v3.9q0 .35.225.575Q8.45 19 8.8 19h6.4q.35 0 .575-.225Q16 18.55 16 18.2V17l-2.7-2.7Zm10.5 1.4-.7-.7h1.45v-4.5q0-.425-.288-.713-.287-.287-.712-.287H12.3l-.7-.7h6.65q.725 0 1.213.487.487.488.487 1.213v4.45q0 .325-.212.538-.213.212-.538.212ZM16 8.8v-3H8.6l-.7-.7h8.05q.325 0 .538.212.212.213.212.538V8.8ZM4.75 15H7.3v-1.4h5.3L8.5 9.5H5.75q-.425 0-.713.287-.287.288-.287.713Zm12.75-3q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 10 17.5 10t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5.75 9.5H8.5 4.75h1Zm12.5 0h1-6.95Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100.displayName = 'AmauiIconMaterialPrintDisabledW100';

export default IconMaterialPrintDisabledW100;
