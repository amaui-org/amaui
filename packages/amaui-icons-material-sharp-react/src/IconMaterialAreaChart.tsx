import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChart'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20V7l4 3 5-7 5 4h4v13Zm5-3 4-5.5 7 5.45V9h-2.7l-3.9-3.125-4.95 6.95L5 11v3.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChart.displayName = 'AmauiIconMaterialAreaChart';

export default IconMaterialAreaChart;
