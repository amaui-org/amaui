import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalCafeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeRounded'
      short_name='LocalCafe'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM8 17Q6.35 17 5.175 15.825Q4 14.65 4 13V5Q4 4.175 4.588 3.587Q5.175 3 6 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V13Q18 14.65 16.825 15.825Q15.65 17 14 17ZM8 15H14Q14.825 15 15.413 14.412Q16 13.825 16 13V5H6Q6 5 6 5Q6 5 6 5V13Q6 13.825 6.588 14.412Q7.175 15 8 15ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18ZM11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeRounded.displayName = 'AmauiIconMaterialLocalCafeRounded';

export default IconMaterialLocalCafeRounded;
