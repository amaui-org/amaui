import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseRounded'
      short_name='House'

      {...props}
    >
      <path d="M11 20H6Q5.575 20 5.287 19.712Q5 19.425 5 19V12H3.3Q2.95 12 2.825 11.675Q2.7 11.35 2.975 11.125L11.325 3.6Q11.6 3.325 12 3.325Q12.4 3.325 12.675 3.6L16 6.6V5Q16 4.575 16.288 4.287Q16.575 4 17 4H18Q18.425 4 18.712 4.287Q19 4.575 19 5V9.3L21.025 11.125Q21.3 11.35 21.175 11.675Q21.05 12 20.7 12H19V19Q19 19.425 18.712 19.712Q18.425 20 18 20H13V14Q13 14 13 14Q13 14 13 14H11Q11 14 11 14Q11 14 11 14ZM7 18H9V13Q9 12.575 9.288 12.287Q9.575 12 10 12H14Q14.425 12 14.713 12.287Q15 12.575 15 13V18H17V10.2L12 5.7L7 10.2ZM10 10.025H14Q14 9.225 13.4 8.712Q12.8 8.2 12 8.2Q11.2 8.2 10.6 8.712Q10 9.225 10 10.025ZM10 12H12H14H10Z"/>
    </Icon>
  );
});

IconMaterialHouseRounded.displayName = 'AmauiIconMaterialHouseRounded';

export default IconMaterialHouseRounded;
