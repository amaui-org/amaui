import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanRoundedW100Filled'
      short_name='SettingsOverscan'

      {...props}
    >
      <path d="M10.5 8.8H13.5L12 7.3ZM17.2 13.5 18.7 12 17.2 10.5ZM6.8 13.5V10.5L5.3 12ZM12 16.7 13.5 15.2H10.5ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanRoundedW100Filled.displayName = 'AmauiIconMaterialSettingsOverscanRoundedW100Filled';

export default IconMaterialSettingsOverscanRoundedW100Filled;
