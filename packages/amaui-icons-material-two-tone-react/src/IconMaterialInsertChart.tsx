import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChart'

      short_name='InsertChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
    </Icon>
  );
});

IconMaterialInsertChart.displayName = 'AmauiIconMaterialInsertChart';

export default IconMaterialInsertChart;
