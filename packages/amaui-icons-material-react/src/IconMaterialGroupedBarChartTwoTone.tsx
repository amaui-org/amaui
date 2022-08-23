import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartTwoTone'
      short_name='GroupedBarChart'

      {...props}
    >
      <path d="M3 20V8H6V20ZM7 20V15H10V20ZM14 20V5H17V20ZM18 20V10H21V20Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartTwoTone.displayName = 'AmauiIconMaterialGroupedBarChartTwoTone';

export default IconMaterialGroupedBarChartTwoTone;
