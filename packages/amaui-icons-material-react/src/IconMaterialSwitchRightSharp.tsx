import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightSharp'
      short_name='SwitchRight'

      {...props}
    >
      <path d="M15.5 15.375 18.875 12 15.5 8.625ZM14 19V5L21 12ZM10 19 3 12 10 5Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightSharp.displayName = 'AmauiIconMaterialSwitchRightSharp';

export default IconMaterialSwitchRightSharp;
