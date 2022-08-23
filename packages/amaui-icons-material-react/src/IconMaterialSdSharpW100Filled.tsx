import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdSharpW100Filled'
      short_name='Sd'

      {...props}
    >
      <path d="M6.8 14.6H11V11.65H7.5V10.1H10.3V10.6H11V9.4H6.8V12.35H10.3V13.9H7.5V13.4H6.8ZM13 14.6H16.1Q16.55 14.6 16.875 14.275Q17.2 13.95 17.2 13.5V10.5Q17.2 10.05 16.875 9.725Q16.55 9.4 16.1 9.4H13ZM13.7 13.9V10.1H16.1Q16.25 10.1 16.375 10.225Q16.5 10.35 16.5 10.5V13.5Q16.5 13.65 16.375 13.775Q16.25 13.9 16.1 13.9ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialSdSharpW100Filled.displayName = 'AmauiIconMaterialSdSharpW100Filled';

export default IconMaterialSdSharpW100Filled;
