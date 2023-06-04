import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendW100Filled'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 16.95v-3.2q0-.275.163-.475.162-.2.437-.25L9.75 12l-4.6-1.025q-.275-.05-.437-.25-.163-.2-.163-.475v-3.3q0-.425.338-.65.337-.225.712-.05l10.625 4.575q-1.875.225-3.325 1.4-1.45 1.175-1.7 3L5.6 17.65q-.375.175-.712-.05-.338-.225-.338-.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm.35-3.85V14q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.4q0 .125.05.237.05.113.125.188L18.15 18.4q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100Filled.displayName = 'AmauiIconMaterialScheduleSendW100Filled';

export default IconMaterialScheduleSendW100Filled;
