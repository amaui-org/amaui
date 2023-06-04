import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlindsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsClosedW100'

      short_name='BlindsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.675 20.65q-.4 0-.675-.275t-.275-.675H3.3V19h2V4.3h13.4V19h2v.7h-5.075q0 .4-.275.675t-.675.275ZM6 7.975h8.325V5H6Zm9.025 0H18V5h-2.975ZM6 11.65h8.325V8.675H6Zm9.025 0H18V8.675h-2.975ZM6 15.325h8.325V12.35H6Zm9.025 0H18V12.35h-2.975ZM6 19h8.325v-2.975H6Zm9.025 0H18v-2.975h-2.975Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosedW100.displayName = 'AmauiIconMaterialBlindsClosedW100';

export default IconMaterialBlindsClosedW100;
