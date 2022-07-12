import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverSharpW700Filled'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M6.15 22.85V3.15H9.15V1.15H14.85V3.15H17.85V22.85ZM10.825 16.575H13.2V14.175H15.575V11.8H13.2V9.425H10.8V11.8H8.425V14.2H10.825Z"/>
    </Icon>
  )
});

export default IconMaterialBatterySaverSharpW700Filled;
