import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullStackedBarChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullStackedBarChartSharp'
      short_name='FullStackedBarChart'

      {...props}
    >
      <path d="M6 17V11H9V17ZM6 20V18H9V20ZM6 10V5H9V10ZM16 20V16H19V20ZM16 15V13H19V15ZM16 12V5H19V12ZM11 20V13H14V20ZM11 12V10H14V12ZM11 9V5H14V9Z"/>
    </Icon>
  );
});

IconMaterialFullStackedBarChartSharp.displayName = 'AmauiIconMaterialFullStackedBarChartSharp';

export default IconMaterialFullStackedBarChartSharp;
