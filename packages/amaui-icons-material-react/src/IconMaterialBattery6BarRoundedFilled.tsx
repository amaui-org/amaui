import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery6BarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6BarRoundedFilled'
      short_name='Battery6Bar'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V3Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM9 8H15V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery6BarRoundedFilled.displayName = 'AmauiIconMaterialBattery6BarRoundedFilled';

export default IconMaterialBattery6BarRoundedFilled;
