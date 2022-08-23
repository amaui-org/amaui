import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalTaxiRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalTaxiRounded'
      short_name='LocalTaxi'

      {...props}
    >
      <path d="M4.5 21Q3.875 21 3.438 20.562Q3 20.125 3 19.5V12L5.1 6Q5.25 5.55 5.638 5.275Q6.025 5 6.5 5H9V4Q9 3.575 9.288 3.287Q9.575 3 10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4V5H17.5Q17.975 5 18.363 5.275Q18.75 5.55 18.9 6L21 12V19.5Q21 20.125 20.562 20.562Q20.125 21 19.5 21Q18.875 21 18.438 20.562Q18 20.125 18 19.5V19H6V19.5Q6 20.125 5.562 20.562Q5.125 21 4.5 21ZM5.8 10H18.2L17.15 7H6.85ZM5 12V17ZM7.5 16Q8.125 16 8.562 15.562Q9 15.125 9 14.5Q9 13.875 8.562 13.438Q8.125 13 7.5 13Q6.875 13 6.438 13.438Q6 13.875 6 14.5Q6 15.125 6.438 15.562Q6.875 16 7.5 16ZM16.5 16Q17.125 16 17.562 15.562Q18 15.125 18 14.5Q18 13.875 17.562 13.438Q17.125 13 16.5 13Q15.875 13 15.438 13.438Q15 13.875 15 14.5Q15 15.125 15.438 15.562Q15.875 16 16.5 16ZM5 17H19V12H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxiRounded.displayName = 'AmauiIconMaterialLocalTaxiRounded';

export default IconMaterialLocalTaxiRounded;
