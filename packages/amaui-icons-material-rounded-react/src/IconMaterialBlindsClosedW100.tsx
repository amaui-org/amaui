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
      <path d="M14.675 20.65q-.4 0-.675-.275t-.275-.675H3.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.725q0 .4-.275.675t-.675.275ZM6 7.975h8.325V5H6.8q-.35 0-.575.225Q6 5.45 6 5.8Zm9.025 0H18V5.8q0-.35-.225-.575Q17.55 5 17.2 5h-2.175ZM6 11.65h8.325V8.675H6Zm9.025 0H18V8.675h-2.975ZM6 15.325h8.325V12.35H6Zm9.025 0H18V12.35h-2.975ZM6 19h8.325v-2.975H6Zm9.025 0H18v-2.975h-2.975Z"/>
    </Icon>
  );
});

IconMaterialBlindsClosedW100.displayName = 'AmauiIconMaterialBlindsClosedW100';

export default IconMaterialBlindsClosedW100;
