import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedLineChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartW100Filled'

      short_name='StackedLineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5 3 20l6.6-6.6 4 4 6.95-8 .5.45-7.4 8.6L9.6 14.4Zm0-6L3 14l6.6-6.6 4 4 6.95-8 .5.45-7.4 8.6L9.6 8.4Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartW100Filled.displayName = 'AmauiIconMaterialStackedLineChartW100Filled';

export default IconMaterialStackedLineChartW100Filled;
