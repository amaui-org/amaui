import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartViewW100'

      short_name='TableChartView'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m296 940-20-20 240-240 140 140 207-207 20 20-227 227-140-140-220 220Zm-104-56h-60V268h616v228H160v360h32v28Zm-32-416h560V296H160v172Zm0 0V296v172Z"/>
    </Icon>
  );
});

IconMaterialTableChartViewW100.displayName = 'AmauiIconMaterialTableChartViewW100';

export default IconMaterialTableChartViewW100;
