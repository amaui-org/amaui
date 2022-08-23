import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnSharpW100'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M9.3 20.7V10.6L7.3 7.6V3.3H16.7V7.6L14.7 10.6V20.7ZM12 14.85Q11.65 14.85 11.4 14.6Q11.15 14.35 11.15 14Q11.15 13.65 11.4 13.4Q11.65 13.15 12 13.15Q12.35 13.15 12.6 13.4Q12.85 13.65 12.85 14Q12.85 14.35 12.6 14.6Q12.35 14.85 12 14.85ZM8 5.65H16V4H8ZM16 6.35H8V7.4L10 10.4V20H14V10.4L16 7.4ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnSharpW100.displayName = 'AmauiIconMaterialFlashlightOnSharpW100';

export default IconMaterialFlashlightOnSharpW100;
