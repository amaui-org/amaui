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
      <path d="M8 19.35q-.15 0-.25-.1t-.1-.25v-1.65H6.4q-.325 0-.537-.212-.213-.213-.213-.538V7.4q0-.325.213-.538.212-.212.537-.212h1.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65H9.6q.325 0 .538.212.212.213.212.538v9.2q0 .325-.212.538-.213.212-.538.212H8.35V19q0 .15-.1.25t-.25.1Zm-1.65-2.7h3.3v-9.3h-3.3Zm9.65 2.7q-.15 0-.25-.1t-.1-.25v-4.65H14.4q-.325 0-.537-.213-.213-.212-.213-.537V9.4q0-.325.213-.538.212-.212.537-.212h1.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h1.25q.325 0 .538.212.212.213.212.538v4.2q0 .325-.212.537-.213.213-.538.213h-1.25V19q0 .15-.1.25t-.25.1Zm-1.65-5.7h3.3v-4.3h-3.3ZM8 12Zm8-.5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartW100.displayName = 'AmauiIconMaterialCandlestickChartW100';

export default IconMaterialCandlestickChartW100;
