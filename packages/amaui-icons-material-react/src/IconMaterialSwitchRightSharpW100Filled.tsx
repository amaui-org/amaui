import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightSharpW100Filled'
      short_name='SwitchRight'

      {...props}
    >
      <path d="M14.7 15.35 18.05 12 14.7 8.65ZM14 17.025V6.975L19.025 12ZM10 17.025 4.975 12 10 6.975Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightSharpW100Filled.displayName = 'AmauiIconMaterialSwitchRightSharpW100Filled';

export default IconMaterialSwitchRightSharpW100Filled;
