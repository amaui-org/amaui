import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStackedBarChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartTwoTone'
      short_name='StackedBarChart'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="11" width="4" x="4" y="9"/><rect height="4" width="4" x="4" y="4"/><rect height="4" width="4" x="10" y="7"/><rect height="4" width="4" x="16" y="10"/><rect height="5" width="4" x="16" y="15"/><rect height="8" width="4" x="10" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialStackedBarChartTwoTone.displayName = 'AmauiIconMaterialStackedBarChartTwoTone';

export default IconMaterialStackedBarChartTwoTone;
