import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopMacRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacRounded'
      short_name='LaptopMac'

      {...props}
    >
      <path d="M2 20Q1.175 20 0.588 19.413Q0 18.825 0 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H24Q24 18.825 23.413 19.413Q22.825 20 22 20ZM20 16Q20 16 20 16Q20 16 20 16V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18Q11 18.425 11.288 18.712Q11.575 19 12 19ZM4 16Q4 16 4 16Q4 16 4 16V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V16Q4 16 4 16Q4 16 4 16Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacRounded.displayName = 'AmauiIconMaterialLaptopMacRounded';

export default IconMaterialLaptopMacRounded;
