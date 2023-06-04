import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartW100'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.05 18.7q-.325 0-.537-.213-.213-.212-.213-.537v-8.2q.1 0 .213.05.112.05.237.15l2.55 1.9 4.5-6.325q.2-.275.512-.312.313-.038.563.162L16.55 8.3h2.4q.325 0 .538.212.212.213.212.538v8.9q0 .325-.212.537-.213.213-.538.213ZM8 17l3.55-4.875q.2-.275.5-.313.3-.037.55.163L19 16.95V9h-2.7l-3.9-3.125-4.95 6.95L5 11v3.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100.displayName = 'AmauiIconMaterialAreaChartW100';

export default IconMaterialAreaChartW100;
