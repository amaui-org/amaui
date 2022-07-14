import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStackedLineChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartSharpFilled'
      short_name='StackedLineChart'

      {...props}
    >
      <path d="M3.5 21.5 2 20 9.5 12.5 13.5 16.5 20.6 8.5 22 9.9 13.5 19.5 9.5 15.5ZM3.5 15.5 2 14 9.5 6.5 13.5 10.5 20.6 2.5 22 3.9 13.5 13.5 9.5 9.5Z"/>
    </Icon>
  );
});

export default IconMaterialStackedLineChartSharpFilled;
