import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartSharp'
      short_name='GroupedBarChart'

      {...props}
    >
      <path d="M3 20V8H6V20ZM7 20V15H10V20ZM14 20V5H17V20ZM18 20V10H21V20Z"/>
    </Icon>
  );
});

export default IconMaterialGroupedBarChartSharp;
