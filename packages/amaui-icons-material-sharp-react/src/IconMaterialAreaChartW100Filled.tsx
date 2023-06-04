import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartW100Filled'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.7 16.625 11.85 10.5 7.875 16 4.3 13.175V9.6l3 2.25 4.95-6.975 4.3 3.425h3.15ZM4.3 18.7v-4.675L8 17l4-5.5 7.7 6v1.2Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100Filled.displayName = 'AmauiIconMaterialAreaChartW100Filled';

export default IconMaterialAreaChartW100Filled;
