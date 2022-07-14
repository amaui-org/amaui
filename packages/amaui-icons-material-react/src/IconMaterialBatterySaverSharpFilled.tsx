import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverSharpFilled'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM11 16H13V14H15V12H13V10H11V12H9V14H11Z"/>
    </Icon>
  );
});

export default IconMaterialBatterySaverSharpFilled;
