import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencySharpFilled'
      short_name='Emergency'

      {...props}
    >
      <path d="M10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V17.2L5.7 19.1Q5.35 19.3 4.95 19.188Q4.55 19.075 4.35 18.725L2.35 15.275Q2.15 14.925 2.25 14.512Q2.35 14.1 2.7 13.9L6 12L2.7 10.1Q2.35 9.9 2.25 9.487Q2.15 9.075 2.35 8.725L4.35 5.275Q4.55 4.925 4.95 4.812Q5.35 4.7 5.7 4.9L9 6.8V3Q9 2.575 9.288 2.287Q9.575 2 10 2H14Q14.425 2 14.713 2.287Q15 2.575 15 3V6.8L18.3 4.9Q18.65 4.7 19.05 4.812Q19.45 4.925 19.65 5.275L21.65 8.725Q21.85 9.075 21.75 9.487Q21.65 9.9 21.3 10.1L18 12L21.3 13.9Q21.65 14.1 21.75 14.512Q21.85 14.925 21.65 15.275L19.65 18.725Q19.45 19.075 19.05 19.188Q18.65 19.3 18.3 19.1L15 17.2V21Q15 21.425 14.713 21.712Q14.425 22 14 22Z"/>
    </Icon>
  );
});

IconMaterialEmergencySharpFilled.displayName = 'AmauiIconMaterialEmergencySharpFilled';

export default IconMaterialEmergencySharpFilled;
