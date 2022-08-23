import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartRoundedW100Filled'
      short_name='GroupedBarChart'

      {...props}
    >
      <path d="M4.9 19.35V8.65H6.6V19.35ZM8.3 19.35V15.65H10V19.35ZM14 19.35V5.65H15.7V19.35ZM17.4 19.35V10.65H19.1V19.35Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartRoundedW100Filled.displayName = 'AmauiIconMaterialGroupedBarChartRoundedW100Filled';

export default IconMaterialGroupedBarChartRoundedW100Filled;
