import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffRoundedFilled'
      short_name='MobileOff'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6ZM5 6.425 7 8.425V18H16.6L19 20.4V21Q19 21.825 18.413 22.413Q17.825 23 17 23H7Q6.175 23 5.588 22.413Q5 21.825 5 21ZM19 3V16.15L17 14.15V6H8.825L5.15 2.3Q5.4 1.725 5.888 1.362Q6.375 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3Z"/>
    </Icon>
  );
});

IconMaterialMobileOffRoundedFilled.displayName = 'AmauiIconMaterialMobileOffRoundedFilled';

export default IconMaterialMobileOffRoundedFilled;
