import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery0BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery0BarSharpFilled'
      short_name='Battery0Bar'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM9 20H15V6H9Z"/>
    </Icon>
  );
});

export default IconMaterialBattery0BarSharpFilled;
