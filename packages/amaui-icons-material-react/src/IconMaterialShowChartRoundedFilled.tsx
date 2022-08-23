import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartRoundedFilled'
      short_name='ShowChart'

      {...props}
    >
      <path d="M2.725 17.75Q2.4 17.425 2.4 17Q2.4 16.575 2.725 16.25L8.775 10.2Q9.075 9.9 9.475 9.9Q9.875 9.9 10.175 10.2L13.475 13.5L19.875 6.275Q20.15 5.95 20.588 5.95Q21.025 5.95 21.325 6.25Q21.6 6.525 21.613 6.912Q21.625 7.3 21.35 7.6L14.175 15.7Q13.9 16.025 13.463 16.038Q13.025 16.05 12.725 15.75L9.475 12.5L4.225 17.75Q3.9 18.075 3.475 18.075Q3.05 18.075 2.725 17.75Z"/>
    </Icon>
  );
});

IconMaterialShowChartRoundedFilled.displayName = 'AmauiIconMaterialShowChartRoundedFilled';

export default IconMaterialShowChartRoundedFilled;
