import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery2BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarSharpFilled'
      short_name='Battery2Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 16H15V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery2BarSharpFilled.displayName = 'AmauiIconMaterialBattery2BarSharpFilled';

export default IconMaterialBattery2BarSharpFilled;
