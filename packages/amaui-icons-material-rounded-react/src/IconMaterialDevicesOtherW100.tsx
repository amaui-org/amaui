import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOtherW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOtherW100'

      short_name='DevicesOther'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.65 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18h2.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.8q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8.5 12.7q-.325 0-.537-.213-.213-.212-.213-.537v-.6q-.525-.35-.763-.838Q9.4 16.025 9.4 15.5t.237-1.012q.238-.488.763-.838v-.6q0-.325.213-.538.212-.212.537-.212h.9q.325 0 .538.212.212.213.212.538v.6q.525.35.762.838.238.487.238 1.012t-.238 1.012q-.237.488-.762.838v.6q0 .325-.212.537-.213.213-.538.213Zm.45-1.7q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.25 14 11.6 14q-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075Q10.95 17 11.6 17Zm4.9 1.7q-.3 0-.5-.2t-.2-.5v-7.5q0-.3.2-.5t.5-.2H20q.3 0 .5.2t.2.5V18q0 .3-.2.5t-.5.2Zm0-.7H20v-7.5h-3.5Z"/>
    </Icon>
  );
});

IconMaterialDevicesOtherW100.displayName = 'AmauiIconMaterialDevicesOtherW100';

export default IconMaterialDevicesOtherW100;
