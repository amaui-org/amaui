import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffRoundedFilled'
      short_name='FlashlightOff'

      {...props}
    >
      <path d="M10 22Q9.175 22 8.588 21.413Q8 20.825 8 20V10.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9L16 18.8V20Q16 20.825 15.413 21.413Q14.825 22 14 22ZM16 13.15 9.85 7H18V8L16 11ZM18 5H7.85L6.125 3.275Q6.35 2.7 6.85 2.35Q7.35 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffRoundedFilled.displayName = 'AmauiIconMaterialFlashlightOffRoundedFilled';

export default IconMaterialFlashlightOffRoundedFilled;
