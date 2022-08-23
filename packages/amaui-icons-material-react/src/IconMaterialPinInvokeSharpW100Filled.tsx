import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinInvokeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeSharpW100Filled'
      short_name='PinInvoke'

      {...props}
    >
      <path d="M9.125 16.35 8.625 15.85 13.175 11.325H10V10.625H14.35V14.975H13.65V11.825ZM18.45 9.8Q17.525 9.8 16.863 9.137Q16.2 8.475 16.2 7.55Q16.2 6.6 16.863 5.95Q17.525 5.3 18.45 5.3Q19.4 5.3 20.05 5.95Q20.7 6.6 20.7 7.55Q20.7 8.475 20.05 9.137Q19.4 9.8 18.45 9.8ZM3.3 18.7V5.3H13.65V6H4V18H20V12.35H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeSharpW100Filled.displayName = 'AmauiIconMaterialPinInvokeSharpW100Filled';

export default IconMaterialPinInvokeSharpW100Filled;
