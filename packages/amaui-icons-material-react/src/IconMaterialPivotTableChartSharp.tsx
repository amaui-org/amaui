import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPivotTableChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartSharp'
      short_name='PivotTableChart'

      {...props}
    >
      <path d="M10 8V3H21V8ZM3 21V10H8V21ZM3 8V3H8V8ZM13 22 9 18 13 14 14.4 15.4 12.85 17H15Q15.825 17 16.413 16.413Q17 15.825 17 15V12.8L15.4 14.4L14 13L18 9L22 13L20.6 14.4L19 12.8V15Q19 16.65 17.825 17.825Q16.65 19 15 19H12.85L14.4 20.6Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartSharp.displayName = 'AmauiIconMaterialPivotTableChartSharp';

export default IconMaterialPivotTableChartSharp;
