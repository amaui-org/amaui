import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi2BarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarRoundedW100Filled'
      short_name='Wifi2Bar'

      {...props}
    >
      <path d="M6 15Q5.85 14.85 5.85 14.637Q5.85 14.425 6 14.3Q7.2 13.2 8.725 12.6Q10.25 12 12 12Q13.75 12 15.275 12.6Q16.8 13.2 18 14.3Q18.15 14.425 18.15 14.637Q18.15 14.85 18 15Q17.85 15.15 17.65 15.15Q17.45 15.15 17.3 15.025Q16.225 14.075 14.875 13.537Q13.525 13 12 13Q10.475 13 9.125 13.537Q7.775 14.075 6.7 15.025Q6.55 15.15 6.35 15.15Q6.15 15.15 6 15ZM12 20.25Q11.475 20.25 11.113 19.887Q10.75 19.525 10.75 19Q10.75 18.475 11.113 18.113Q11.475 17.75 12 17.75Q12.525 17.75 12.887 18.113Q13.25 18.475 13.25 19Q13.25 19.525 12.887 19.887Q12.525 20.25 12 20.25Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarRoundedW100Filled.displayName = 'AmauiIconMaterialWifi2BarRoundedW100Filled';

export default IconMaterialWifi2BarRoundedW100Filled;
