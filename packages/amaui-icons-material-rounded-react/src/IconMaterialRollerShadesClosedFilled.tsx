import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedFilled'

      short_name='RollerShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.75q-.725 0-1.238-.512-.512-.513-.512-1.238H3q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21h-7.25q0 .725-.512 1.238-.513.512-1.238.512ZM6 19h5v-2H6Zm7 0h5v-2h-5Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedFilled.displayName = 'AmauiIconMaterialRollerShadesClosedFilled';

export default IconMaterialRollerShadesClosedFilled;
