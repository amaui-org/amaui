import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneLockedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedRoundedW100Filled'
      short_name='PhoneLocked'

      {...props}
    >
      <path d="M15.25 9.7Q14.925 9.7 14.713 9.487Q14.5 9.275 14.5 8.95V6.05Q14.5 5.725 14.713 5.512Q14.925 5.3 15.25 5.3H15.5V4.3Q15.5 3.575 15.988 3.087Q16.475 2.6 17.2 2.6Q17.925 2.6 18.413 3.087Q18.9 3.575 18.9 4.3V5.3H19.15Q19.475 5.3 19.688 5.512Q19.9 5.725 19.9 6.05V8.95Q19.9 9.275 19.688 9.487Q19.475 9.7 19.15 9.7ZM16.2 5.3H18.2V4.3Q18.2 3.875 17.913 3.587Q17.625 3.3 17.2 3.3Q16.775 3.3 16.488 3.587Q16.2 3.875 16.2 4.3ZM18.35 19.55Q15.925 19.55 13.388 18.25Q10.85 16.95 8.788 14.887Q6.725 12.825 5.413 10.3Q4.1 7.775 4.1 5.35Q4.1 4.9 4.4 4.6Q4.7 4.3 5.15 4.3H7.15Q7.6 4.3 7.912 4.562Q8.225 4.825 8.325 5.25L8.775 7.3Q8.85 7.7 8.762 8.025Q8.675 8.35 8.4 8.575L6.3 10.5Q7.7 12.85 9.425 14.55Q11.15 16.25 13.5 17.55L15.55 15.4Q15.825 15.125 16.113 15.037Q16.4 14.95 16.75 15.025L18.45 15.375Q18.875 15.475 19.138 15.788Q19.4 16.1 19.4 16.55V18.5Q19.4 18.95 19.1 19.25Q18.8 19.55 18.35 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneLockedRoundedW100Filled';

export default IconMaterialPhoneLockedRoundedW100Filled;
