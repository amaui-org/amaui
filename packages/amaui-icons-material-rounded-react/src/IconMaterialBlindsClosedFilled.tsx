import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlindsClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsClosedFilled'

      short_name='BlindsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 22.75q-.725 0-1.238-.512-.512-.513-.512-1.238H3q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21h-4.25q0 .725-.512 1.238-.513.512-1.238.512ZM6 7h8V5H6Zm10 0h2V5h-2ZM6 11h8V9H6Zm10 0h2V9h-2ZM6 15h8v-2H6Zm10 0h2v-2h-2ZM6 19h8v-2H6Zm10 0h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosedFilled.displayName = 'AmauiIconMaterialBlindsClosedFilled';

export default IconMaterialBlindsClosedFilled;
