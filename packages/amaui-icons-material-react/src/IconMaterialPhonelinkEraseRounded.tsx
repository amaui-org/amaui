import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseRounded'
      short_name='PhonelinkErase'

      {...props}
    >
      <path d="M13.7 15.3Q13.425 15.025 13.425 14.6Q13.425 14.175 13.7 13.9L15.6 12L13.7 10.1Q13.425 9.825 13.425 9.4Q13.425 8.975 13.7 8.7Q13.975 8.425 14.4 8.425Q14.825 8.425 15.1 8.7L17 10.6L18.9 8.7Q19.175 8.425 19.6 8.425Q20.025 8.425 20.3 8.7Q20.575 8.975 20.575 9.4Q20.575 9.825 20.3 10.1L18.4 12L20.3 13.9Q20.575 14.175 20.575 14.6Q20.575 15.025 20.3 15.3Q20.025 15.575 19.6 15.575Q19.175 15.575 18.9 15.3L17 13.4L15.1 15.3Q14.825 15.575 14.4 15.575Q13.975 15.575 13.7 15.3ZM16 20H6V21Q6 21 6 21Q6 21 6 21H16Q16 21 16 21Q16 21 16 21ZM16 4V3Q16 3 16 3Q16 3 16 3H6Q6 3 6 3Q6 3 6 3V4ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V3Q4 2.175 4.588 1.587Q5.175 1 6 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V7H16V6H6V18H16V17H18V21Q18 21.825 17.413 22.413Q16.825 23 16 23ZM6 3Q6 3 6 3Q6 3 6 3V4V3Q6 3 6 3Q6 3 6 3ZM6 21Q6 21 6 21Q6 21 6 21V20V21Q6 21 6 21Q6 21 6 21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseRounded.displayName = 'AmauiIconMaterialPhonelinkEraseRounded';

export default IconMaterialPhonelinkEraseRounded;
