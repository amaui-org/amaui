import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi2BarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarRoundedFilled'
      short_name='Wifi2Bar'

      {...props}
    >
      <path d="M5.3 14.275Q4.85 13.825 4.875 13.2Q4.9 12.575 5.375 12.225Q6.75 11.175 8.438 10.587Q10.125 10 12 10Q13.9 10 15.588 10.6Q17.275 11.2 18.65 12.275Q19.125 12.625 19.138 13.238Q19.15 13.85 18.7 14.3Q18.275 14.725 17.663 14.738Q17.05 14.75 16.525 14.4Q15.55 13.725 14.413 13.363Q13.275 13 12 13Q10.725 13 9.588 13.375Q8.45 13.75 7.5 14.4Q6.95 14.775 6.338 14.738Q5.725 14.7 5.3 14.275ZM12 20Q11.15 20 10.575 19.425Q10 18.85 10 18Q10 17.15 10.575 16.575Q11.15 16 12 16Q12.85 16 13.425 16.575Q14 17.15 14 18Q14 18.85 13.425 19.425Q12.85 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarRoundedFilled.displayName = 'AmauiIconMaterialWifi2BarRoundedFilled';

export default IconMaterialWifi2BarRoundedFilled;
