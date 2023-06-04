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
      <path d="M15 22.75q-.725 0-1.238-.512-.512-.513-.512-1.238H2v-2h2V3h16v16h2v2h-5.25q0 .725-.512 1.238-.513.512-1.238.512ZM6 7h8V5H6Zm10 0h2V5h-2ZM6 11h8V9H6Zm10 0h2V9h-2ZM6 15h8v-2H6Zm10 0h2v-2h-2ZM6 19h8v-2H6Zm10 0h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosedFilled.displayName = 'AmauiIconMaterialBlindsClosedFilled';

export default IconMaterialBlindsClosedFilled;
