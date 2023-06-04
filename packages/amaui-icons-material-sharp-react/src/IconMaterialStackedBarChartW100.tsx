import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedBarChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartW100'

      short_name='StackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.35v-9.7h2.7v9.7Zm0-12v-2.7h2.7v2.7Zm6 12v-6.7h2.7v6.7Zm0-9v-2.7h2.7v2.7Zm6 9v-3.7h2.7v3.7Zm0-6v-2.7h2.7v2.7Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChartW100.displayName = 'AmauiIconMaterialStackedBarChartW100';

export default IconMaterialStackedBarChartW100;
