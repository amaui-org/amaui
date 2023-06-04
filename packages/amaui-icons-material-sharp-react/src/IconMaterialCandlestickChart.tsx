import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandlestickChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChart'

      short_name='CandlestickChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20v-2H5V6h2V4h2v2h2v12H9v2Zm0-4h2V8H7Zm8 4v-5h-2V8h2V4h2v4h2v7h-2v5Zm0-7h2v-3h-2Zm-7-1Zm8-.5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChart.displayName = 'AmauiIconMaterialCandlestickChart';

export default IconMaterialCandlestickChart;
