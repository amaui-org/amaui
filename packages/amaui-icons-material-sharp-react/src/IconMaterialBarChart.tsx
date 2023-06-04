import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChart'

      short_name='BarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"/>
    </Icon>
  );
});

IconMaterialBarChart.displayName = 'AmauiIconMaterialBarChart';

export default IconMaterialBarChart;
