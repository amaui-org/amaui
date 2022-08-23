import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPieChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartSharpFilled'
      short_name='PieChart'

      {...props}
    >
      <path d="M13 11V2.1Q16.575 2.475 19.038 4.95Q21.5 7.425 21.9 11ZM11.025 21.875Q7.225 21.5 4.663 18.675Q2.1 15.85 2.1 12Q2.1 8.125 4.663 5.3Q7.225 2.475 11.025 2.1ZM13 21.875V12.975H21.9Q21.55 16.55 19.062 19.038Q16.575 21.525 13 21.875Z"/>
    </Icon>
  );
});

IconMaterialPieChartSharpFilled.displayName = 'AmauiIconMaterialPieChartSharpFilled';

export default IconMaterialPieChartSharpFilled;
