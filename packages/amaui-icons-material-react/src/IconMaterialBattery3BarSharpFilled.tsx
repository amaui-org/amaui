import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery3BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarSharpFilled'
      short_name='Battery3Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 14H15V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery3BarSharpFilled.displayName = 'AmauiIconMaterialBattery3BarSharpFilled';

export default IconMaterialBattery3BarSharpFilled;
