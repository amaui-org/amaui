import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandlestickChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartW100Filled'

      short_name='CandlestickChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 19.35v-2h-2V6.65h2v-2h.7v2h2v10.7h-2v2Zm8 0v-5h-2v-5.7h2v-4h.7v4h2v5.7h-2v5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartW100Filled.displayName = 'AmauiIconMaterialCandlestickChartW100Filled';

export default IconMaterialCandlestickChartW100Filled;
