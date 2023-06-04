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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.5 13.48l-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialShowChart.displayName = 'AmauiIconMaterialShowChart';

export default IconMaterialShowChart;
