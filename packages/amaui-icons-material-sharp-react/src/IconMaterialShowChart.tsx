import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChart'

      short_name='ShowChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 18.5 2 17l7.5-7.5 4 4 7.1-8L22 6.9l-8.5 9.6-4-4Z"/>
    </Icon>
  );
});

IconMaterialShowChart.displayName = 'AmauiIconMaterialShowChart';

export default IconMaterialShowChart;
