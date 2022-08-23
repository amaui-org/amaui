import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkLockRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockRounded'
      short_name='PhonelinkLock'

      {...props}
    >
      <path d="M15.85 16Q15.5 16 15.25 15.75Q15 15.5 15 15.15V11.85Q15 11.5 15.25 11.25Q15.5 11 15.85 11H16V10Q16 9.175 16.587 8.587Q17.175 8 18 8Q18.825 8 19.413 8.587Q20 9.175 20 10V11H20.15Q20.5 11 20.75 11.25Q21 11.5 21 11.85V15.15Q21 15.5 20.75 15.75Q20.5 16 20.15 16ZM17 11H19V10Q19 9.575 18.712 9.287Q18.425 9 18 9Q17.575 9 17.288 9.287Q17 9.575 17 10ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkLockRounded.displayName = 'AmauiIconMaterialPhonelinkLockRounded';

export default IconMaterialPhonelinkLockRounded;
