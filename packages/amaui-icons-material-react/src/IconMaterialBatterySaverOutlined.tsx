import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverOutlined'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V2H14V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM11 16H13V14H15V12H13V10H11V12H9V14H11Z"/>
    </Icon>
  )
});

export default IconMaterialBatterySaverOutlined;
