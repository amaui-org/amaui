import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeRoundedW100Filled'
      short_name='VerticalDistribute'

      {...props}
    >
      <path d="M3 4Q2.85 4 2.75 3.9Q2.65 3.8 2.65 3.65Q2.65 3.5 2.75 3.4Q2.85 3.3 3 3.3H21Q21.15 3.3 21.25 3.4Q21.35 3.5 21.35 3.65Q21.35 3.8 21.25 3.9Q21.15 4 21 4ZM8.5 12.85Q8.15 12.85 7.9 12.6Q7.65 12.35 7.65 12Q7.65 11.65 7.9 11.4Q8.15 11.15 8.5 11.15H15.5Q15.85 11.15 16.1 11.4Q16.35 11.65 16.35 12Q16.35 12.35 16.1 12.6Q15.85 12.85 15.5 12.85ZM3 20.7Q2.85 20.7 2.75 20.6Q2.65 20.5 2.65 20.35Q2.65 20.2 2.75 20.1Q2.85 20 3 20H21Q21.15 20 21.25 20.1Q21.35 20.2 21.35 20.35Q21.35 20.5 21.25 20.6Q21.15 20.7 21 20.7Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeRoundedW100Filled.displayName = 'AmauiIconMaterialVerticalDistributeRoundedW100Filled';

export default IconMaterialVerticalDistributeRoundedW100Filled;
