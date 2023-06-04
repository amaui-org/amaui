import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingW100'

      short_name='CallMissedOutgoing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.875 16.2q-.15 0-.275-.05-.125-.05-.25-.175L4 8.625q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l7.35 7.35 7.15-7.15h-5.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.6q.325 0 .538.212.212.213.212.538V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V8.85L12.4 15.975q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingW100.displayName = 'AmauiIconMaterialCallMissedOutgoingW100';

export default IconMaterialCallMissedOutgoingW100;
