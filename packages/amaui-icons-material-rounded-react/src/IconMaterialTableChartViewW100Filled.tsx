import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartViewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartViewW100Filled'

      short_name='TableChartView'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M286 930q-5-5-5-10t5-10l188-188q17-17 42-17t42 17l75 75q9 9 23 9t23-9l174-174q4-4 9.5-4.5T873 623q5 5 5 10t-5 10L698 818q-17 17-42 17t-42-17l-75-75q-9-9-23-9t-23 9L306 930q-4 4-9.5 4.5T286 930Zm-94-46q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v138q0 13-8.5 21.5T718 496H160v328q0 12 10 22t22 10v28Z"/>
    </Icon>
  );
});

IconMaterialTableChartViewW100Filled.displayName = 'AmauiIconMaterialTableChartViewW100Filled';

export default IconMaterialTableChartViewW100Filled;
