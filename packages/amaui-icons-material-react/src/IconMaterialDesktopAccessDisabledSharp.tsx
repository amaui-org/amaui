import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledSharp'
      short_name='DesktopAccessDisabled'

      {...props}
    >
      <path d="M20.7 17.85 18.85 16H20V5H7.85L5.85 3H22V17.85ZM20.5 23.3 15.15 18H14V20H16V22H8V20H10V18H2V4.85L0.7 3.5L2.1 2.1L21.9 21.9ZM4 16H13.15L4 6.8Z"/>
    </Icon>
  )
});

export default IconMaterialDesktopAccessDisabledSharp;
