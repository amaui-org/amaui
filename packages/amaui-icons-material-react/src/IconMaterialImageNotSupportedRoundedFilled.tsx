import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedRoundedFilled'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M19.775 22.6 18.175 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.8L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.5 21.5 21.488 21.9Q21.475 22.3 21.175 22.6Q20.875 22.875 20.475 22.887Q20.075 22.9 19.775 22.6ZM7 17H14.175L11.85 14.675L11 15.725L9.4 13.55Q9.25 13.35 9 13.35Q8.75 13.35 8.6 13.55L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17ZM21 18.175 5.825 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedRoundedFilled.displayName = 'AmauiIconMaterialImageNotSupportedRoundedFilled';

export default IconMaterialImageNotSupportedRoundedFilled;
