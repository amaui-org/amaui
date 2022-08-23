import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockSharp'
      short_name='PunchClock'

      {...props}
    >
      <path d="M3 22V6H6V1H18V6H21V22ZM8 6H16V3H8ZM5 20H19V8H5ZM12 19Q9.925 19 8.463 17.538Q7 16.075 7 14Q7 11.925 8.463 10.462Q9.925 9 12 9Q14.075 9 15.538 10.462Q17 11.925 17 14Q17 16.075 15.538 17.538Q14.075 19 12 19ZM12 17.5Q13.45 17.5 14.475 16.475Q15.5 15.45 15.5 14Q15.5 12.55 14.475 11.525Q13.45 10.5 12 10.5Q10.55 10.5 9.525 11.525Q8.5 12.55 8.5 14Q8.5 15.45 9.525 16.475Q10.55 17.5 12 17.5ZM13.15 15.85 11.5 14.2V11.5H12.5V13.8L13.85 15.15ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPunchClockSharp.displayName = 'AmauiIconMaterialPunchClockSharp';

export default IconMaterialPunchClockSharp;
