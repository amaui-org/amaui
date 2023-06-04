import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcessChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcessChart'

      short_name='ProcessChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.3 18.45-1.8-.9 6-12 1.8.9Zm6.6 0-1.8-.9 6-12 1.8.9Zm6.6 0-1.8-.9 6-12 1.8.9Z"/>
    </Icon>
  );
});

IconMaterialProcessChart.displayName = 'AmauiIconMaterialProcessChart';

export default IconMaterialProcessChart;
