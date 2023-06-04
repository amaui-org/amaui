import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChartDataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataW100Filled'

      short_name='ChartData'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 15.075 3.05-3.025 2 2 4.2-4.2v2.5h.7v-3.7h-3.7v.7h2.5l-3.7 3.7-2-2-3.525 3.55ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialChartDataW100Filled.displayName = 'AmauiIconMaterialChartDataW100Filled';

export default IconMaterialChartDataW100Filled;
