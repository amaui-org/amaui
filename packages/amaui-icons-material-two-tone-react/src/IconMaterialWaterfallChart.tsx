import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterfallChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChart'

      short_name='WaterfallChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M18,4h3v16h-3V4z M3,13h3v7H3V13z M14,4h3v3h-3V4z M10,5h3v4h-3V5z M7,10h3v4H7V10z"/></g></g>
    </Icon>
  );
});

IconMaterialWaterfallChart.displayName = 'AmauiIconMaterialWaterfallChart';

export default IconMaterialWaterfallChart;
