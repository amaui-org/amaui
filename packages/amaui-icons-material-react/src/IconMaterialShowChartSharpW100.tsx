import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartSharpW100'
      short_name='ShowChart'

      {...props}
    >
      <path d="M3.5 17.6 3 17.1 9.6 10.5 13.6 14.5 20.55 6.5 21.05 6.95 13.65 15.55 9.6 11.5Z"/>
    </Icon>
  );
});

IconMaterialShowChartSharpW100.displayName = 'AmauiIconMaterialShowChartSharpW100';

export default IconMaterialShowChartSharpW100;
