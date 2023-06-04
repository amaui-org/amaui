import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartW100Filled'

      short_name='GroupedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.35V8.65h2.7v10.7Zm5 0v-5.7h2.7v5.7Zm7 0V4.65h2.7v14.7Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartW100Filled.displayName = 'AmauiIconMaterialGroupedBarChartW100Filled';

export default IconMaterialGroupedBarChartW100Filled;
