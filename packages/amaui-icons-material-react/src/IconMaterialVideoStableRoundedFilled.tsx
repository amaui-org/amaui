import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableRoundedFilled'
      short_name='VideoStable'

      {...props}
    >
      <path d="M16 17.725Q16.4 17.825 16.75 17.625Q17.1 17.425 17.225 17.025L19.025 10.3Q19.15 9.875 18.938 9.525Q18.725 9.175 18.325 9.075L8.05 6.275Q7.65 6.175 7.3 6.375Q6.95 6.575 6.825 6.975L5.025 13.7Q4.9 14.125 5.113 14.475Q5.325 14.825 5.725 14.925ZM7.225 13.25 8.5 8.45ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialVideoStableRoundedFilled.displayName = 'AmauiIconMaterialVideoStableRoundedFilled';

export default IconMaterialVideoStableRoundedFilled;
