import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverSharpW100Filled'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35ZM11.65 15.35H12.35V13.35H14.35V12.65H12.35V10.65H11.65V12.65H9.65V13.35H11.65Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverSharpW100Filled.displayName = 'AmauiIconMaterialBatterySaverSharpW100Filled';

export default IconMaterialBatterySaverSharpW100Filled;
