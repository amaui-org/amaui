import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberPin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPin'

      short_name='FiberPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.625 15q.275 0 .45-.175t.175-.45V11.5l2.275 3.125q.125.15.338.262.212.113.412.113.3 0 .513-.213.212-.212.212-.512v-4.65q0-.275-.175-.45T18.375 9q-.275 0-.45.175t-.175.45V12.5l-2.225-3.1q-.125-.175-.35-.287Q14.95 9 14.75 9q-.325 0-.537.212Q14 9.425 14 9.75v4.625q0 .275.175.45t.45.175ZM12 15q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.538Q12.325 9 12 9q-.325 0-.537.212-.213.213-.213.538v4.5q0 .325.213.537.212.213.537.213Zm-6.25 0q.325 0 .537-.213.213-.212.213-.537V13H9q.425 0 .713-.288Q10 12.425 10 12v-2q0-.425-.287-.713Q9.425 9 9 9H6q-.425 0-.713.287Q5 9.575 5 10v4.25q0 .325.213.537.212.213.537.213Zm.75-3.5v-1h2v1ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialFiberPin.displayName = 'AmauiIconMaterialFiberPin';

export default IconMaterialFiberPin;
