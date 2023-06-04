import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartW100Filled'

      short_name='ShowChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.5 17.6-.5-.5 6.6-6.6 4 4 6.95-8 .5.45-7.4 8.6L9.6 11.5Z"/>
    </Icon>
  );
});

IconMaterialShowChartW100Filled.displayName = 'AmauiIconMaterialShowChartW100Filled';

export default IconMaterialShowChartW100Filled;
