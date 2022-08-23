import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverRoundedFilled'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V3Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM12 16Q12.425 16 12.713 15.712Q13 15.425 13 15V14H14Q14.425 14 14.713 13.712Q15 13.425 15 13Q15 12.575 14.713 12.287Q14.425 12 14 12H13V11Q13 10.575 12.713 10.287Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V12H10Q9.575 12 9.288 12.287Q9 12.575 9 13Q9 13.425 9.288 13.712Q9.575 14 10 14H11V15Q11 15.425 11.288 15.712Q11.575 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverRoundedFilled.displayName = 'AmauiIconMaterialBatterySaverRoundedFilled';

export default IconMaterialBatterySaverRoundedFilled;
