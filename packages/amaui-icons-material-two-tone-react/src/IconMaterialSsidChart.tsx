import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSsidChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChart'

      short_name='SsidChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,5.47L12,12L7.62,7.62L3,11V8.52L7.83,5l4.38,4.38L21,3L21,5.47z M21,15h-4.7l-4.17,3.34L6,12.41l-3,2.13L3,17l2.8-2 l6.2,6l5-4h4V15z"/></g>
    </Icon>
  );
});

IconMaterialSsidChart.displayName = 'AmauiIconMaterialSsidChart';

export default IconMaterialSsidChart;
