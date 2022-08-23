import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarRoundedW100'
      short_name='SignalWifi4Bar'

      {...props}
    >
      <path d="M12 18.85Q11.85 18.85 11.725 18.8Q11.6 18.75 11.475 18.625L2.35 9.5Q2.15 9.3 2.15 9.025Q2.15 8.75 2.375 8.575Q4.45 6.95 6.9 6.125Q9.35 5.3 12 5.3Q14.65 5.3 17.1 6.125Q19.55 6.95 21.625 8.575Q21.85 8.75 21.85 9.025Q21.85 9.3 21.65 9.5L12.525 18.625Q12.4 18.75 12.275 18.8Q12.15 18.85 12 18.85Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarRoundedW100.displayName = 'AmauiIconMaterialSignalWifi4BarRoundedW100';

export default IconMaterialSignalWifi4BarRoundedW100;
