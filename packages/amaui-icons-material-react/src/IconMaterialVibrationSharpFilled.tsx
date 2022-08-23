import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationSharpFilled'
      short_name='Vibration'

      {...props}
    >
      <path d="M0 15V9H2V15ZM3 17V7H5V17ZM22 15V9H24V15ZM19 17V7H21V17ZM6 21V3H18V21Z"/>
    </Icon>
  );
});

IconMaterialVibrationSharpFilled.displayName = 'AmauiIconMaterialVibrationSharpFilled';

export default IconMaterialVibrationSharpFilled;
