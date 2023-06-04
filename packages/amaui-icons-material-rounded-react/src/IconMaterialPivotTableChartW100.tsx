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
      <path d="M10.65 7.65v-3.2h8.2q.65 0 1.075.425.425.425.425 1.075v1.7Zm-4.7 12.7q-.65 0-1.075-.425-.425-.425-.425-1.075v-8.2h3.2v9.7Zm-1.5-12.7v-1.7q0-.65.425-1.075Q5.3 4.45 5.95 4.45h1.7v3.2Zm8.3 13.2-2.325-2.325q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l2.35-2.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2 2H15q1.1 0 1.875-.775.775-.775.775-1.875v-3.75l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V15q0 1.4-.975 2.375-.975.975-2.375.975h-3.75l2.025 2.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartW100.displayName = 'AmauiIconMaterialPivotTableChartW100';

export default IconMaterialPivotTableChartW100;
