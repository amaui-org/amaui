import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPieChartSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartSharpW100Filled'
      short_name='PieChart'

      {...props}
    >
      <path d="M12.35 11.65V3.35Q15.775 3.475 18.137 5.85Q20.5 8.225 20.65 11.65ZM11.65 20.625Q8.175 20.5 5.775 18Q3.375 15.5 3.375 12Q3.375 8.475 5.775 5.975Q8.175 3.475 11.65 3.35ZM12.35 20.625V12.35H20.65Q20.5 15.75 18.137 18.125Q15.775 20.5 12.35 20.625Z"/>
    </Icon>
  );
});

IconMaterialPieChartSharpW100Filled.displayName = 'AmauiIconMaterialPieChartSharpW100Filled';

export default IconMaterialPieChartSharpW100Filled;
