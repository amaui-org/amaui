import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbTwilightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightW100Filled'

      short_name='WbTwilight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.6 9.45q-.125-.125-.125-.25t.125-.25l1.125-1.125q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-1.125 1.125q-.075.1-.212.1-.138 0-.263-.125ZM3 19.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 7.3q-.15 0-.25-.1t-.1-.25v-1.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.5q0 .15-.1.25t-.25.1ZM5.9 9.45 4.775 8.325q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l1.125 1.125q.1.075.1.213 0 .137-.125.262t-.25.125q-.125 0-.25-.125Zm.55 5.25q.45-1.95 2-3.175Q10 10.3 12 10.3q2 0 3.55 1.225 1.55 1.225 2 3.175Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightW100Filled.displayName = 'AmauiIconMaterialWbTwilightW100Filled';

export default IconMaterialWbTwilightW100Filled;
