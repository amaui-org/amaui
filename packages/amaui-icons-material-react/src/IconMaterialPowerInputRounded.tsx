import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputRounded'
      short_name='PowerInput'

      {...props}
    >
      <path d="M3 11Q2.575 11 2.288 10.712Q2 10.425 2 10Q2 9.575 2.288 9.287Q2.575 9 3 9H20Q20.425 9 20.712 9.287Q21 9.575 21 10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM3 15Q2.575 15 2.288 14.712Q2 14.425 2 14Q2 13.575 2.288 13.287Q2.575 13 3 13H6.025Q6.45 13 6.725 13.287Q7 13.575 7 14Q7 14.425 6.713 14.712Q6.425 15 6 15ZM10 15Q9.575 15 9.288 14.712Q9 14.425 9 14Q9 13.575 9.288 13.287Q9.575 13 10 13H13Q13.425 13 13.713 13.287Q14 13.575 14 14Q14 14.425 13.713 14.712Q13.425 15 13 15ZM16.975 15Q16.55 15 16.275 14.712Q16 14.425 16 14Q16 13.575 16.288 13.287Q16.575 13 17 13H20Q20.425 13 20.712 13.287Q21 13.575 21 14Q21 14.425 20.712 14.712Q20.425 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialPowerInputRounded.displayName = 'AmauiIconMaterialPowerInputRounded';

export default IconMaterialPowerInputRounded;
