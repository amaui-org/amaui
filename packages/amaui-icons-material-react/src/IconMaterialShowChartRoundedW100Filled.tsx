import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartRoundedW100Filled'
      short_name='ShowChart'

      {...props}
    >
      <path d="M3.25 17.35Q3.125 17.225 3.125 17.1Q3.125 16.975 3.25 16.85L9.075 11.025Q9.3 10.8 9.6 10.8Q9.9 10.8 10.125 11.025L13.6 14.5L20.325 6.75Q20.425 6.625 20.55 6.625Q20.675 6.625 20.8 6.725Q20.9 6.825 20.913 6.95Q20.925 7.075 20.825 7.2L14.175 14.925Q13.975 15.175 13.638 15.188Q13.3 15.2 13.075 14.975L9.6 11.5L3.75 17.35Q3.65 17.45 3.513 17.462Q3.375 17.475 3.25 17.35Z"/>
    </Icon>
  );
});

IconMaterialShowChartRoundedW100Filled.displayName = 'AmauiIconMaterialShowChartRoundedW100Filled';

export default IconMaterialShowChartRoundedW100Filled;
