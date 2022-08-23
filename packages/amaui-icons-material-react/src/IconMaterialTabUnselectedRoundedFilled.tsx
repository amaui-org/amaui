import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabUnselectedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedRoundedFilled'
      short_name='TabUnselected'

      {...props}
    >
      <path d="M14 20V18H16V20ZM8 6V4H10V6ZM14 10Q13.175 10 12.588 9.412Q12 8.825 12 8V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V10ZM18 20V18H20Q20 18 20 18Q20 18 20 18V16H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM10 20V18H12V20ZM20 14V12H22V14ZM2 16V14H4V16ZM2 12V10H4V12ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18H4Q4 18 4 18Q4 18 4 18V20ZM2 8V6Q2 5.175 2.588 4.588Q3.175 4 4 4H6V6H4Q4 6 4 6Q4 6 4 6V8ZM6 20V18H8V20Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedRoundedFilled.displayName = 'AmauiIconMaterialTabUnselectedRoundedFilled';

export default IconMaterialTabUnselectedRoundedFilled;
