import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullStackedBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullStackedBarChartW100Filled'

      short_name='FullStackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.35v-1.7h2.7v1.7Zm0-4v-2.7h2.7v2.7Zm0-5v-5.7h2.7v5.7Zm6 9v-5.7h2.7v5.7Zm0-8v-2.7h2.7v2.7Zm0-5v-1.7h2.7v1.7Zm6 13v-.7h2.7v.7Zm0-3v-2.7h2.7v2.7Zm0-5v-6.7h2.7v6.7Z"/>
    </Icon>
  );
});

IconMaterialFullStackedBarChartW100Filled.displayName = 'AmauiIconMaterialFullStackedBarChartW100Filled';

export default IconMaterialFullStackedBarChartW100Filled;
