import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery5BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery5BarSharpFilled'
      short_name='Battery5Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 10H15V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery5BarSharpFilled.displayName = 'AmauiIconMaterialBattery5BarSharpFilled';

export default IconMaterialBattery5BarSharpFilled;
