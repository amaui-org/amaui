import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingUpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpSharpFilled'
      short_name='TrendingUp'

      {...props}
    >
      <path d="M3.4 18 2 16.6 9.4 9.15 13.4 13.15 18.6 8H16V6H22V12H20V9.4L13.4 16L9.4 12Z"/>
    </Icon>
  );
});

export default IconMaterialTrendingUpSharpFilled;
