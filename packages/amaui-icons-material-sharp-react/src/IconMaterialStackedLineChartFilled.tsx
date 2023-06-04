import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedLineChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartFilled'

      short_name='StackedLineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 21.5 2 20l7.5-7.5 4 4 7.1-8L22 9.9l-8.5 9.6-4-4Zm0-6L2 14l7.5-7.5 4 4 7.1-8L22 3.9l-8.5 9.6-4-4Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartFilled.displayName = 'AmauiIconMaterialStackedLineChartFilled';

export default IconMaterialStackedLineChartFilled;
