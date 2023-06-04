import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleSendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendW100'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.55 16.95v-10q0-.425.338-.65.337-.225.712-.05l10.625 4.575q-.325.05-.687.113-.363.062-.588.162L5.25 7v4l4.5 1-4.5 1v4l6.225-2.65q-.1.2-.175.475-.075.275-.1.4L5.6 17.65q-.375.175-.712-.05-.338-.225-.338-.65Zm12.2 3.25q-1.55 0-2.625-1.075T13.05 16.5q0-1.55 1.075-2.625T16.75 12.8q1.55 0 2.625 1.075T20.45 16.5q0 1.55-1.075 2.625T16.75 20.2Zm1.9-1.8q.125-.125.125-.25t-.125-.25l-1.55-1.55V14q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.4q0 .125.05.237.05.113.125.188L18.15 18.4q.1.1.238.112.137.013.262-.112Zm-13.4-4.05V7v10Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100.displayName = 'AmauiIconMaterialScheduleSendW100';

export default IconMaterialScheduleSendW100;
