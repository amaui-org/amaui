import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationSharpW100Filled'
      short_name='Vibration'

      {...props}
    >
      <path d="M1.9 14.35V9.65H2.6V14.35ZM4.6 16.35V7.65H5.3V16.35ZM21.4 14.35V9.65H22.1V14.35ZM18.7 16.35V7.65H19.4V16.35ZM7.3 19.7V4.3H16.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialVibrationSharpW100Filled.displayName = 'AmauiIconMaterialVibrationSharpW100Filled';

export default IconMaterialVibrationSharpW100Filled;
