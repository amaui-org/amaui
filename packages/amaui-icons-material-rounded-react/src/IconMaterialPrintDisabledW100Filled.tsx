import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100Filled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14.3v3.9q0 .35.225.575Q8.45 19 8.8 19h6.4q.35 0 .575-.225Q16 18.55 16 18.2V17l-2.7-2.7Zm10.5 1.4h.7q.325 0 .538-.212.212-.213.212-.538V10.5q0-.725-.487-1.213-.488-.487-1.213-.487H11.6Zm-1-3.7q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 10 17.5 10t.712.287q.288.288.288.713t-.288.712Q17.925 12 17.5 12Zm-.8-3.9h-5.8l-3-3h8.05q.325 0 .538.212.212.213.212.538Zm-9.4 7.6H4.8q-.325 0-.537-.212-.213-.213-.213-.538V10.5q0-.725.487-1.213Q5.025 8.8 5.75 8.8H7.8L3.375 4.375q-.1-.1-.1-.225T3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3.4-3.4.5-.5v1.5q0 .625-.438 1.062-.437.438-1.062.438H8.8q-.625 0-1.062-.438Q7.3 18.825 7.3 18.2Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100Filled.displayName = 'AmauiIconMaterialPrintDisabledW100Filled';

export default IconMaterialPrintDisabledW100Filled;
