import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi1BarRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarRoundedW700Filled'
      short_name='Wifi1Bar'

      {...props}
    >
      <path d="M12 21Q10.95 21 10.225 20.275Q9.5 19.55 9.5 18.5Q9.5 17.45 10.225 16.725Q10.95 16 12 16Q13.05 16 13.775 16.725Q14.5 17.45 14.5 18.5Q14.5 19.55 13.775 20.275Q13.05 21 12 21Z"/>
    </Icon>
  )
});

export default IconMaterialWifi1BarRoundedW700Filled;
