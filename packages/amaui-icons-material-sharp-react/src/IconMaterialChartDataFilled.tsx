import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChartDataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataFilled'

      short_name='ChartData'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 16 3.05-3.05 2 2L16 11.425V13h2V8h-5v2h1.575l-2.125 2.125-2-2L6 14.6ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialChartDataFilled.displayName = 'AmauiIconMaterialChartDataFilled';

export default IconMaterialChartDataFilled;
