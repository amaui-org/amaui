import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandlestickChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartFilled'

      short_name='CandlestickChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20v-2H5V6h2V4h2v2h2v12H9v2Zm8 0v-5h-2V8h2V4h2v4h2v7h-2v5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartFilled.displayName = 'AmauiIconMaterialCandlestickChartFilled';

export default IconMaterialCandlestickChartFilled;
