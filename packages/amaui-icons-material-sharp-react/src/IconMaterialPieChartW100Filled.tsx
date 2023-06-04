import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPieChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartW100Filled'

      short_name='PieChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 11.65v-8.3q3.425.125 5.787 2.5 2.363 2.375 2.513 5.8Zm-.7 8.975Q8.175 20.5 5.775 18t-2.4-6q0-3.525 2.4-6.025 2.4-2.5 5.875-2.625Zm.7 0V12.35h8.3q-.15 3.4-2.513 5.775-2.362 2.375-5.787 2.5Z"/>
    </Icon>
  );
});

IconMaterialPieChartW100Filled.displayName = 'AmauiIconMaterialPieChartW100Filled';

export default IconMaterialPieChartW100Filled;
