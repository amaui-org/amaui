import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalShippingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingRoundedFilled'
      short_name='LocalShipping'

      {...props}
    >
      <path d="M6 20Q4.75 20 3.875 19.125Q3 18.25 3 17Q2.175 17 1.588 16.413Q1 15.825 1 15V6Q1 5.175 1.588 4.588Q2.175 4 3 4H15Q15.825 4 16.413 4.588Q17 5.175 17 6V8H19.5Q19.75 8 19.95 8.1Q20.15 8.2 20.3 8.4L22.8 11.725Q22.9 11.85 22.95 12Q23 12.15 23 12.325V16Q23 16.425 22.712 16.712Q22.425 17 22 17H21Q21 18.25 20.125 19.125Q19.25 20 18 20Q16.75 20 15.875 19.125Q15 18.25 15 17H9Q9 18.25 8.125 19.125Q7.25 20 6 20ZM6 18Q6.425 18 6.713 17.712Q7 17.425 7 17Q7 16.575 6.713 16.288Q6.425 16 6 16Q5.575 16 5.287 16.288Q5 16.575 5 17Q5 17.425 5.287 17.712Q5.575 18 6 18ZM18 18Q18.425 18 18.712 17.712Q19 17.425 19 17Q19 16.575 18.712 16.288Q18.425 16 18 16Q17.575 16 17.288 16.288Q17 16.575 17 17Q17 17.425 17.288 17.712Q17.575 18 18 18ZM17 13H21.25L19 10H17Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingRoundedFilled.displayName = 'AmauiIconMaterialLocalShippingRoundedFilled';

export default IconMaterialLocalShippingRoundedFilled;
