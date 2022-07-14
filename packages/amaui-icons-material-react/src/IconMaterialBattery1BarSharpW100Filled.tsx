import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery1BarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarSharpW100Filled'
      short_name='Battery1Bar'

      {...props}
    >
      <path d="M8.15 20.45V5.075H10.4V3.575H13.6V5.075H15.85V20.45ZM8.85 17.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

export default IconMaterialBattery1BarSharpW100Filled;
