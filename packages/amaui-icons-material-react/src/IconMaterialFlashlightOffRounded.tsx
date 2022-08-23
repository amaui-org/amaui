import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffRounded'
      short_name='FlashlightOff'

      {...props}
    >
      <path d="M20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9L16 18.8V20Q16 20.825 15.413 21.413Q14.825 22 14 22H10Q9.175 22 8.588 21.413Q8 20.825 8 20V10.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9ZM10 12.8V20Q10 20 10 20Q10 20 10 20H14Q14 20 14 20Q14 20 14 20V16.8ZM16 13.15 14 11.15V10.4L16 7.4V7H9.85L7.85 5H16V4Q16 4 16 4Q16 4 16 4H6.85Q6.85 4 6.85 4Q6.85 4 6.85 4L6.125 3.275Q6.35 2.7 6.85 2.35Q7.35 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V8L16 11ZM12 14.8Q12 14.8 12 14.8Q12 14.8 12 14.8Q12 14.8 12 14.8Q12 14.8 12 14.8ZM12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffRounded.displayName = 'AmauiIconMaterialFlashlightOffRounded';

export default IconMaterialFlashlightOffRounded;
