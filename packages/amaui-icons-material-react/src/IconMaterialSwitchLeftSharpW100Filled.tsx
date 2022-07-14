import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchLeftSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftSharpW100Filled'
      short_name='SwitchLeft'

      {...props}
    >
      <path d="M9.3 15.35V8.65L5.95 12ZM10 17.025 4.975 12 10 6.975ZM14 17.025V6.975L19.025 12Z"/>
    </Icon>
  );
});

export default IconMaterialSwitchLeftSharpW100Filled;
