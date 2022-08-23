import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffRoundedFilled'
      short_name='TvOff'

      {...props}
    >
      <path d="M21.3 18.5 5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.45 21.825 17.825Q21.65 18.2 21.3 18.5ZM19.8 22.6 16.2 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21H9Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.95 2 4.9Q2 4.85 2 4.8L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6Z"/>
    </Icon>
  );
});

IconMaterialTvOffRoundedFilled.displayName = 'AmauiIconMaterialTvOffRoundedFilled';

export default IconMaterialTvOffRoundedFilled;
