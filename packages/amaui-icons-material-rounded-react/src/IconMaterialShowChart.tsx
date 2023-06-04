import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChart'

      short_name='ShowChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.725 17.75Q2.4 17.425 2.4 17t.325-.75l6.05-6.05q.3-.3.7-.3.4 0 .7.3l3.3 3.3 6.4-7.225q.275-.325.713-.325.437 0 .737.3.275.275.288.662.012.388-.263.688l-7.175 8.1q-.275.325-.712.338-.438.012-.738-.288l-3.25-3.25-5.25 5.25q-.325.325-.75.325t-.75-.325Z"/>
    </Icon>
  );
});

IconMaterialShowChart.displayName = 'AmauiIconMaterialShowChart';

export default IconMaterialShowChart;
