import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery4BarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarSharpW100Filled'
      short_name='Battery4Bar'

      {...props}
    >
      <path d="M8.15 20.45V5.075H10.4V3.575H13.6V5.075H15.85V20.45ZM8.85 11.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

IconMaterialBattery4BarSharpW100Filled.displayName = 'AmauiIconMaterialBattery4BarSharpW100Filled';

export default IconMaterialBattery4BarSharpW100Filled;
