import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricCarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCarRounded'
      short_name='ElectricCar'

      {...props}
    >
      <path d="M6 15V15.5Q6 16.125 5.562 16.562Q5.125 17 4.5 17Q3.875 17 3.438 16.562Q3 16.125 3 15.5V8L5.1 2Q5.25 1.55 5.638 1.275Q6.025 1 6.5 1H17.5Q17.975 1 18.363 1.275Q18.75 1.55 18.9 2L21 8V15.5Q21 16.125 20.562 16.562Q20.125 17 19.5 17Q18.875 17 18.438 16.562Q18 16.125 18 15.5V15ZM5.8 6H18.2L17.15 3H6.85ZM5 8V13ZM7.5 12Q8.125 12 8.562 11.562Q9 11.125 9 10.5Q9 9.875 8.562 9.438Q8.125 9 7.5 9Q6.875 9 6.438 9.438Q6 9.875 6 10.5Q6 11.125 6.438 11.562Q6.875 12 7.5 12ZM16.5 12Q17.125 12 17.562 11.562Q18 11.125 18 10.5Q18 9.875 17.562 9.438Q17.125 9 16.5 9Q15.875 9 15.438 9.438Q15 9.875 15 10.5Q15 11.125 15.438 11.562Q15.875 12 16.5 12ZM13 23 7 20H11V18L17 21H13ZM5 13H19V8H5Z"/>
    </Icon>
  );
});

IconMaterialElectricCarRounded.displayName = 'AmauiIconMaterialElectricCarRounded';

export default IconMaterialElectricCarRounded;
