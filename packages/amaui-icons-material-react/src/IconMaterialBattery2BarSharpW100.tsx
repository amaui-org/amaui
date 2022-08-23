import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery2BarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarSharpW100'
      short_name='Battery2Bar'

      {...props}
    >
      <path d="M8.15 20.45V5.075H10.4V3.575H13.6V5.075H15.85V20.45ZM8.85 15.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

IconMaterialBattery2BarSharpW100.displayName = 'AmauiIconMaterialBattery2BarSharpW100';

export default IconMaterialBattery2BarSharpW100;
