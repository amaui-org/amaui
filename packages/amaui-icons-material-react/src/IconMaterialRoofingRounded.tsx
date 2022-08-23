import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingRounded'
      short_name='Roofing'

      {...props}
    >
      <path d="M3.3 12Q2.95 12 2.825 11.675Q2.7 11.35 2.975 11.125L11.325 3.6Q11.6 3.325 12 3.325Q12.4 3.325 12.675 3.6L16 6.6V5Q16 4.575 16.288 4.287Q16.575 4 17 4H18Q18.425 4 18.712 4.287Q19 4.575 19 5V9.3L21.025 11.125Q21.3 11.35 21.175 11.675Q21.05 12 20.7 12H19.375Q19.175 12 19.013 11.938Q18.85 11.875 18.725 11.75L12 5.7L5.275 11.75Q5.15 11.875 4.988 11.938Q4.825 12 4.625 12ZM10 20Q9.575 20 9.288 19.712Q9 19.425 9 19V15Q9 14.575 9.288 14.287Q9.575 14 10 14H14Q14.425 14 14.713 14.287Q15 14.575 15 15V19Q15 19.425 14.713 19.712Q14.425 20 14 20ZM11 18H13V16H11Z"/>
    </Icon>
  );
});

IconMaterialRoofingRounded.displayName = 'AmauiIconMaterialRoofingRounded';

export default IconMaterialRoofingRounded;
