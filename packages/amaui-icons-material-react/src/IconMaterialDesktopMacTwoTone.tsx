import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacTwoTone'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 4h18v10H3z" opacity=".3"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
    </Icon>
  );
});

IconMaterialDesktopMacTwoTone.displayName = 'AmauiIconMaterialDesktopMacTwoTone';

export default IconMaterialDesktopMacTwoTone;
