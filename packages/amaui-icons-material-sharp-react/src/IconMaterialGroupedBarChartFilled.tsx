import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartFilled'

      short_name='GroupedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V8h4v12Zm5 0v-7h4v7Zm7 0V4h4v16Z"/>
    </Icon>
  );
});

IconMaterialGroupedBarChartFilled.displayName = 'AmauiIconMaterialGroupedBarChartFilled';

export default IconMaterialGroupedBarChartFilled;
