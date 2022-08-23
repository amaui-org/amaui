import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarRounded'
      short_name='SignalWifi4Bar'

      {...props}
    >
      <path d="M12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 8.987Q0.425 8.575 0.725 8.3Q3.05 6.2 5.95 5.1Q8.85 4 12 4Q15.15 4 18.05 5.1Q20.95 6.2 23.275 8.3Q23.575 8.575 23.588 8.987Q23.6 9.4 23.3 9.7L12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarRounded.displayName = 'AmauiIconMaterialSignalWifi4BarRounded';

export default IconMaterialSignalWifi4BarRounded;
