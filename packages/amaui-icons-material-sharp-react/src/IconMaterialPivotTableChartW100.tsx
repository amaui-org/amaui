import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPivotTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartW100'

      short_name='PivotTableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 7.65v-3.2h9.7v3.2Zm-6.2 12.7v-9.7h3.2v9.7Zm0-12.7v-3.2h3.2v3.2ZM13 21.1 9.9 18l3.1-3.1.5.5-2.25 2.25H15q1.1 0 1.875-.775.775-.775.775-1.875v-3.75L15.4 13.5l-.5-.5L18 9.9l3.1 3.1-.5.5-2.25-2.25V15q0 1.4-.975 2.375-.975.975-2.375.975h-3.75l2.25 2.25Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartW100.displayName = 'AmauiIconMaterialPivotTableChartW100';

export default IconMaterialPivotTableChartW100;
