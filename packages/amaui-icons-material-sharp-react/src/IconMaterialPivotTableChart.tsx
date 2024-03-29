import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPivotTableChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChart'

      short_name='PivotTableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 8V3h11v5ZM3 21V10h5v11ZM3 8V3h5v5Zm10 14-4-4 4-4 1.4 1.4-1.55 1.6H15q.825 0 1.413-.587Q17 15.825 17 15v-2.2l-1.6 1.6L14 13l4-4 4 4-1.4 1.4-1.6-1.6V15q0 1.65-1.175 2.825Q16.65 19 15 19h-2.15l1.55 1.6Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChart.displayName = 'AmauiIconMaterialPivotTableChart';

export default IconMaterialPivotTableChart;
