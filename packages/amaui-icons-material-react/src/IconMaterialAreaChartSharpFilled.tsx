import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartSharpFilled'
      short_name='AreaChart'

      {...props}
    >
      <path d="M21 16 11.6 8.65 7.625 14.125 3 10.5V7L7 10L12 3L17 7H21ZM3 20V13L8 17L12 11.5L21 18.525V20Z"/>
    </Icon>
  )
});

export default IconMaterialAreaChartSharpFilled;
