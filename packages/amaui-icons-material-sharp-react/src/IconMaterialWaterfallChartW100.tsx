import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterfallChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartW100'

      short_name='WaterfallChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 18.35V13h1.2v5.35Zm3.7-4.85v-3.35h1.2v3.35Zm2.7-4.65v-3.2h1.2v3.2Zm3.7-3v-1.2h1.2v1.2Zm3.7 12.5V4.65h1.2v13.7Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartW100.displayName = 'AmauiIconMaterialWaterfallChartW100';

export default IconMaterialWaterfallChartW100;
