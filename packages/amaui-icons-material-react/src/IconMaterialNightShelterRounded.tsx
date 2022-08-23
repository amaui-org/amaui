import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightShelterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterRounded'
      short_name='NightShelter'

      {...props}
    >
      <path d="M6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.325 3.5 12 3.5Q12.675 3.5 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V19Q20 19.825 19.413 20.413Q18.825 21 18 21ZM6 19H18V10L12 5.5L6 10ZM8 16.5H16V17.5Q16 17.7 16.15 17.85Q16.3 18 16.5 18Q16.7 18 16.85 17.85Q17 17.7 17 17.5V14Q17 13.175 16.413 12.587Q15.825 12 15 12H12Q11.8 12 11.65 12.15Q11.5 12.3 11.5 12.5V15.5H8V11.5Q8 11.3 7.85 11.15Q7.7 11 7.5 11Q7.3 11 7.15 11.15Q7 11.3 7 11.5V17.5Q7 17.7 7.15 17.85Q7.3 18 7.5 18Q7.7 18 7.85 17.85Q8 17.7 8 17.5ZM9.75 15Q10.275 15 10.637 14.637Q11 14.275 11 13.75Q11 13.225 10.637 12.863Q10.275 12.5 9.75 12.5Q9.225 12.5 8.863 12.863Q8.5 13.225 8.5 13.75Q8.5 14.275 8.863 14.637Q9.225 15 9.75 15ZM6 19H12H18H6Z"/>
    </Icon>
  );
});

IconMaterialNightShelterRounded.displayName = 'AmauiIconMaterialNightShelterRounded';

export default IconMaterialNightShelterRounded;
