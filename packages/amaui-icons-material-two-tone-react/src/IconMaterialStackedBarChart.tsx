import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedBarChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChart'

      short_name='StackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="11" width="4" x="4" y="9"/><rect height="4" width="4" x="4" y="4"/><rect height="4" width="4" x="10" y="7"/><rect height="4" width="4" x="16" y="10"/><rect height="5" width="4" x="16" y="15"/><rect height="8" width="4" x="10" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialStackedBarChart.displayName = 'AmauiIconMaterialStackedBarChart';

export default IconMaterialStackedBarChart;
