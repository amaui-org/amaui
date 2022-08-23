import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnRoundedFilled'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M10 22Q9.175 22 8.588 21.413Q8 20.825 8 20V11L6 8V7H18V8L16 11V20Q16 20.825 15.413 21.413Q14.825 22 14 22ZM12 15.5Q12.625 15.5 13.062 15.062Q13.5 14.625 13.5 14Q13.5 13.375 13.062 12.938Q12.625 12.5 12 12.5Q11.375 12.5 10.938 12.938Q10.5 13.375 10.5 14Q10.5 14.625 10.938 15.062Q11.375 15.5 12 15.5ZM6 5V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V5Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnRoundedFilled.displayName = 'AmauiIconMaterialFlashlightOnRoundedFilled';

export default IconMaterialFlashlightOnRoundedFilled;
