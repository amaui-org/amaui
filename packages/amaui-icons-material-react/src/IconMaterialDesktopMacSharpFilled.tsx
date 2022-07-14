import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacSharpFilled'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M8 22V21L10 19H2V3H22V19H14L16 21V22Z"/>
    </Icon>
  );
});

export default IconMaterialDesktopMacSharpFilled;
