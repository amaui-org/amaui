import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi1BarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarRoundedW100Filled'
      short_name='Wifi1Bar'

      {...props}
    >
      <path d="M12 20.25Q11.475 20.25 11.113 19.887Q10.75 19.525 10.75 19Q10.75 18.475 11.113 18.113Q11.475 17.75 12 17.75Q12.525 17.75 12.887 18.113Q13.25 18.475 13.25 19Q13.25 19.525 12.887 19.887Q12.525 20.25 12 20.25Z"/>
    </Icon>
  )
});

export default IconMaterialWifi1BarRoundedW100Filled;
