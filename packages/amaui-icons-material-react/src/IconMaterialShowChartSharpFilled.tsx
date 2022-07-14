import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartSharpFilled'
      short_name='ShowChart'

      {...props}
    >
      <path d="M3.5 18.5 2 17 9.5 9.5 13.5 13.5 20.6 5.5 22 6.9 13.5 16.5 9.5 12.5Z"/>
    </Icon>
  );
});

export default IconMaterialShowChartSharpFilled;
