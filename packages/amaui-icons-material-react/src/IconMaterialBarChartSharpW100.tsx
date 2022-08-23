import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartSharpW100'
      short_name='BarChart'

      {...props}
    >
      <path d="M6.2 18.35V9.65H7.4V18.35ZM11.4 18.35V5.65H12.6V18.35ZM16.6 18.35V13.65H17.8V18.35Z"/>
    </Icon>
  );
});

IconMaterialBarChartSharpW100.displayName = 'AmauiIconMaterialBarChartSharpW100';

export default IconMaterialBarChartSharpW100;
