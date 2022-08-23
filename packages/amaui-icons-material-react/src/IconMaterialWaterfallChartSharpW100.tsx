import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterfallChartSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartSharpW100'
      short_name='WaterfallChart'

      {...props}
    >
      <path d="M18.3 18.35V4.65H19.5V18.35ZM4.5 18.35V13H5.7V18.35ZM14.6 5.85V4.65H15.8V5.85ZM10.9 8.85V5.65H12.1V8.85ZM8.2 13.5V10.15H9.4V13.5Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartSharpW100.displayName = 'AmauiIconMaterialWaterfallChartSharpW100';

export default IconMaterialWaterfallChartSharpW100;
