import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicExternalOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffRounded'
      short_name='MicExternalOff'

      {...props}
    >
      <path d="M9.5 6.65 5.35 2.5Q5.7 2.225 6.125 2.112Q6.55 2 7 2Q8.25 2 9.125 2.862Q10 3.725 10 5Q10 5.45 9.863 5.862Q9.725 6.275 9.5 6.65ZM20 17.15 18 15.15V6Q18 5.175 17.413 4.588Q16.825 4 16 4Q15.175 4 14.588 4.588Q14 5.175 14 6V11.15L12 9.15V6Q12 4.3 13.175 3.15Q14.35 2 16 2Q17.65 2 18.825 3.15Q20 4.3 20 6ZM19.8 22.6 14 16.8V18Q14 19.65 12.825 20.825Q11.65 22 10 22Q8.35 22 7.175 20.825Q6 19.65 6 18H5.45Q5.25 18 5.113 17.875Q4.975 17.75 4.95 17.55L4.1 9.1Q4.05 8.65 4.35 8.325Q4.65 8 5.1 8H5.15L1.4 4.2Q1.125 3.925 1.113 3.512Q1.1 3.1 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6ZM6.8 16H7.2L7.75 10.55L7.15 10H6.2ZM10 20Q10.825 20 11.413 19.413Q12 18.825 12 18V14.8L9.55 12.35L9.05 17.55Q9.025 17.75 8.887 17.875Q8.75 18 8.55 18H8Q8 18.825 8.588 19.413Q9.175 20 10 20ZM6.2 10H7.15H7.75H7.2H6.8Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffRounded.displayName = 'AmauiIconMaterialMicExternalOffRounded';

export default IconMaterialMicExternalOffRounded;
