import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandlestickChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartW100'

      short_name='CandlestickChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 19.35v-2h-2V6.65h2v-2h.7v2h2v10.7h-2v2Zm-1.3-2.7h3.3v-9.3h-3.3Zm9.3 2.7v-5h-2v-5.7h2v-4h.7v4h2v5.7h-2v5Zm-1.3-5.7h3.3v-4.3h-3.3ZM8 12Zm8-.5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartW100.displayName = 'AmauiIconMaterialCandlestickChartW100';

export default IconMaterialCandlestickChartW100;
