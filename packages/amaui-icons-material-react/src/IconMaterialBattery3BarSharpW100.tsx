import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery3BarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarSharpW100'
      short_name='Battery3Bar'

      {...props}
    >
      <path d="M8.15 20.45V5.075H10.4V3.575H13.6V5.075H15.85V20.45ZM8.85 13.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

IconMaterialBattery3BarSharpW100.displayName = 'AmauiIconMaterialBattery3BarSharpW100';

export default IconMaterialBattery3BarSharpW100;
