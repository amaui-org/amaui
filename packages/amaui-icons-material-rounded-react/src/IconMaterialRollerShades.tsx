import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShades = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShades'

      short_name='RollerShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11h12V5H6Zm0 8h12v-6h-5v1.8q.35.25.55.625.2.375.2.825 0 .725-.512 1.238Q12.725 18 12 18t-1.238-.512q-.512-.513-.512-1.238 0-.45.2-.812.2-.363.55-.613V13H6ZM6 5h12H6ZM3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21Z"/>
    </Icon>
  );
});

IconMaterialRollerShades.displayName = 'AmauiIconMaterialRollerShades';

export default IconMaterialRollerShades;
