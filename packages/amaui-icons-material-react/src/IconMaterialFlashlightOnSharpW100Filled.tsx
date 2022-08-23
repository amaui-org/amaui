import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnSharpW100Filled'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M7.3 5.65V3.3H16.7V5.65ZM12 14.85Q12.35 14.85 12.6 14.6Q12.85 14.35 12.85 14Q12.85 13.65 12.6 13.4Q12.35 13.15 12 13.15Q11.65 13.15 11.4 13.4Q11.15 13.65 11.15 14Q11.15 14.35 11.4 14.6Q11.65 14.85 12 14.85ZM9.3 20.7V10.6L7.3 7.6V6.35H16.7V7.6L14.7 10.6V20.7Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnSharpW100Filled.displayName = 'AmauiIconMaterialFlashlightOnSharpW100Filled';

export default IconMaterialFlashlightOnSharpW100Filled;
