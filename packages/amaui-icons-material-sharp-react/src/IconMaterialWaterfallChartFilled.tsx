import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterfallChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartFilled'

      short_name='WaterfallChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-7h3v7Zm4-6v-4h3v4Zm3-5V5h3v4Zm4-2V4h3v3Zm4 13V4h3v16Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartFilled.displayName = 'AmauiIconMaterialWaterfallChartFilled';

export default IconMaterialWaterfallChartFilled;
