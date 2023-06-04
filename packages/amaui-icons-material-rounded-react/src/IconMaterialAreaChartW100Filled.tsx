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
      <path d="m19.7 16.625-6.625-5.175q-.5-.4-1.125-.313-.625.088-1 .613L7.875 16 5.25 13.925q-.25-.2-.475-.288-.225-.087-.475-.112V9.75q.1 0 .213.05.112.05.237.15l2.55 1.9 4.5-6.325q.2-.275.512-.312.313-.038.563.162L16.55 8.3h2.4q.325 0 .538.212.212.213.212.538ZM5.05 18.7q-.325 0-.537-.213-.213-.212-.213-.537v-3.725q.125 0 .237.037.113.038.238.138L8 17l3.55-4.875q.2-.275.5-.313.3-.037.55.163l7.1 5.525v.45q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialAreaChartW100Filled.displayName = 'AmauiIconMaterialAreaChartW100Filled';

export default IconMaterialAreaChartW100Filled;
