import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartSharp'
      short_name='AreaChart'

      {...props}
    >
      <path d="M3 20V7L7 10L12 3L17 7H21V20ZM8 17 12 11.5 19 16.95V9H16.3L12.4 5.875L7.45 12.825L5 11V14.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChartSharp.displayName = 'AmauiIconMaterialAreaChartSharp';

export default IconMaterialAreaChartSharp;
