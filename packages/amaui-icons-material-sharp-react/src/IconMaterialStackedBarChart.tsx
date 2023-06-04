import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedBarChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChart'

      short_name='StackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V9h4v11ZM4 8V4h4v4Zm6 12v-8h4v8Zm0-9V7h4v4Zm6 9v-5h4v5Zm0-6v-4h4v4Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChart.displayName = 'AmauiIconMaterialStackedBarChart';

export default IconMaterialStackedBarChart;
