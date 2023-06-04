import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedLineChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartFilled'

      short_name='StackedLineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 15.5-5.25 5.25q-.325.325-.75.325t-.75-.325q-.325-.325-.325-.75t.325-.75L8.8 13.2q.3-.3.7-.3.4 0 .7.3l3.3 3.3 6.4-7.225q.275-.325.713-.325.437 0 .737.3.275.275.288.662.012.388-.263.688L14.2 18.7q-.275.325-.712.338-.438.012-.738-.288Zm0-6-5.25 5.25q-.325.325-.75.325t-.75-.325q-.325-.325-.325-.75t.325-.75L8.8 7.2q.3-.3.7-.3.4 0 .7.3l3.3 3.3 6.4-7.225q.275-.325.713-.325.437 0 .737.3.275.275.288.662.012.388-.263.688L14.2 12.7q-.275.325-.712.337-.438.013-.738-.287Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartFilled.displayName = 'AmauiIconMaterialStackedLineChartFilled';

export default IconMaterialStackedLineChartFilled;
