import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStackedBarChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartSharp'
      short_name='StackedBarChart'

      {...props}
    >
      <path d="M5.5 20V10H8.5V20ZM5.5 9V5H8.5V9ZM15.5 20V16H18.5V20ZM15.5 15V13H18.5V15ZM10.5 20V13H13.5V20ZM10.5 12V9H13.5V12Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChartSharp.displayName = 'AmauiIconMaterialStackedBarChartSharp';

export default IconMaterialStackedBarChartSharp;
