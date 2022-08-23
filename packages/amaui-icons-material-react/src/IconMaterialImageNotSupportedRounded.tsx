import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedRounded'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5.825Q3 5.825 3 5.825Q3 5.825 3 5.825L1.4 4.2Q1.125 3.925 1.113 3.512Q1.1 3.1 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.5 21.5 21.488 21.9Q21.475 22.3 21.175 22.6Q20.875 22.875 20.475 22.887Q20.075 22.9 19.775 22.6L18.175 21Q18.175 21 18.175 21Q18.175 21 18.175 21ZM5 19H16.175L14.175 17H7Q6.7 17 6.55 16.725Q6.4 16.45 6.6 16.2L8.6 13.55Q8.75 13.35 9 13.35Q9.25 13.35 9.4 13.55L11 15.725L11.85 14.675L5 7.825V19Q5 19 5 19Q5 19 5 19ZM21 18.175 19 16.175V5Q19 5 19 5Q19 5 19 5H7.825L5.825 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM13.475 10.65Q13.475 10.65 13.475 10.65Q13.475 10.65 13.475 10.65ZM10.6 13.425Q10.6 13.425 10.6 13.425Q10.6 13.425 10.6 13.425Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedRounded.displayName = 'AmauiIconMaterialImageNotSupportedRounded';

export default IconMaterialImageNotSupportedRounded;
