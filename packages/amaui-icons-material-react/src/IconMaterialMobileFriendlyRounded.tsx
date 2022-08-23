import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyRounded'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 15.575Q14.75 15.575 14.575 15.512Q14.4 15.45 14.25 15.3L11.4 12.45Q11.125 12.175 11.125 11.75Q11.125 11.325 11.4 11.05Q11.675 10.775 12.1 10.775Q12.525 10.775 12.8 11.05L14.95 13.2L19.9 8.25Q20.175 7.975 20.6 7.975Q21.025 7.975 21.3 8.25Q21.575 8.525 21.575 8.95Q21.575 9.375 21.3 9.65L15.65 15.3Q15.5 15.45 15.325 15.512Q15.15 15.575 14.95 15.575ZM16 20H6V21Q6 21 6 21Q6 21 6 21H16Q16 21 16 21Q16 21 16 21ZM16 4V3Q16 3 16 3Q16 3 16 3H6Q6 3 6 3Q6 3 6 3V4ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V3Q4 2.175 4.588 1.587Q5.175 1 6 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V7H16V6H6V18H16V17H18V21Q18 21.825 17.413 22.413Q16.825 23 16 23ZM6 3Q6 3 6 3Q6 3 6 3V4V3Q6 3 6 3Q6 3 6 3ZM6 21Q6 21 6 21Q6 21 6 21V20V21Q6 21 6 21Q6 21 6 21Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyRounded.displayName = 'AmauiIconMaterialMobileFriendlyRounded';

export default IconMaterialMobileFriendlyRounded;
