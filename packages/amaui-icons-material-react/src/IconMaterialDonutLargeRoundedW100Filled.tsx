import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDonutLargeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeRoundedW100Filled'
      short_name='DonutLarge'

      {...props}
    >
      <path d="M19.975 11Q19.6 8.275 17.675 6.337Q15.75 4.4 13.025 4.05V3.35Q16.1 3.625 18.25 5.775Q20.4 7.925 20.675 11ZM13.025 20.65V19.95Q15.75 19.6 17.65 17.663Q19.55 15.725 19.975 13H20.675Q20.375 16.05 18.225 18.212Q16.075 20.375 13.025 20.65ZM11.025 20.65Q7.7 20.3 5.513 17.825Q3.325 15.35 3.325 12Q3.325 8.65 5.513 6.2Q7.7 3.75 11.025 3.35V4.05Q8 4.475 6.013 6.725Q4.025 8.975 4.025 12Q4.025 15.025 6.013 17.275Q8 19.525 11.025 19.95Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeRoundedW100Filled.displayName = 'AmauiIconMaterialDonutLargeRoundedW100Filled';

export default IconMaterialDonutLargeRoundedW100Filled;
