import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery6BarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarSharpW100Filled'
      short_name='Battery6Bar'

      {...props}
    >
      <path d="M8.15 20.45V5.075H10.4V3.575H13.6V5.075H15.85V20.45ZM8.85 7.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

IconMaterialBattery6BarSharpW100Filled.displayName = 'AmauiIconMaterialBattery6BarSharpW100Filled';

export default IconMaterialBattery6BarSharpW100Filled;
