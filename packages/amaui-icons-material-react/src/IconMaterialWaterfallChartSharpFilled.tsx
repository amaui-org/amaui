import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterfallChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartSharpFilled'
      short_name='WaterfallChart'

      {...props}
    >
      <path d="M18 20V4H21V20ZM3 20V13H6V20ZM14 7V4H17V7ZM10 9V5H13V9ZM7 14V10H10V14Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartSharpFilled.displayName = 'AmauiIconMaterialWaterfallChartSharpFilled';

export default IconMaterialWaterfallChartSharpFilled;
