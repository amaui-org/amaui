import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiSharpFilled'
      short_name='Wifi'

      {...props}
    >
      <path d="M6.35 15.35 4.25 13.2Q5.725 11.725 7.713 10.863Q9.7 10 12 10Q14.3 10 16.288 10.875Q18.275 11.75 19.75 13.25L17.65 15.35Q16.55 14.25 15.1 13.625Q13.65 13 12 13Q10.35 13 8.9 13.625Q7.45 14.25 6.35 15.35ZM2.1 11.1 0 9Q2.3 6.65 5.375 5.325Q8.45 4 12 4Q15.55 4 18.625 5.325Q21.7 6.65 24 9L21.9 11.1Q19.975 9.175 17.438 8.087Q14.9 7 12 7Q9.1 7 6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21 15.525 17.45Q14.85 16.775 13.95 16.387Q13.05 16 12 16Q10.95 16 10.05 16.387Q9.15 16.775 8.475 17.45Z"/>
    </Icon>
  );
});

IconMaterialWifiSharpFilled.displayName = 'AmauiIconMaterialWifiSharpFilled';

export default IconMaterialWifiSharpFilled;
