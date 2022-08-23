import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnRounded'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M10 22Q9.175 22 8.588 21.413Q8 20.825 8 20V11L6 8V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V8L16 11V20Q16 20.825 15.413 21.413Q14.825 22 14 22ZM12 15.5Q11.375 15.5 10.938 15.062Q10.5 14.625 10.5 14Q10.5 13.375 10.938 12.938Q11.375 12.5 12 12.5Q12.625 12.5 13.062 12.938Q13.5 13.375 13.5 14Q13.5 14.625 13.062 15.062Q12.625 15.5 12 15.5ZM8 5H16V4Q16 4 16 4Q16 4 16 4H8Q8 4 8 4Q8 4 8 4ZM16 7H8V7.4L10 10.4V20Q10 20 10 20Q10 20 10 20H14Q14 20 14 20Q14 20 14 20V10.4L16 7.4ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnRounded.displayName = 'AmauiIconMaterialFlashlightOnRounded';

export default IconMaterialFlashlightOnRounded;
