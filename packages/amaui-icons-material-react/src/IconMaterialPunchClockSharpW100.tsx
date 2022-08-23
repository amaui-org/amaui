import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockSharpW100'
      short_name='PunchClock'

      {...props}
    >
      <path d="M3.65 21.35V6.65H6.65V1.65H17.35V6.65H20.35V21.35ZM7.35 6.65H16.65V2.35H7.35ZM4.35 20.65H19.65V7.35H4.35ZM12 18.6Q10.1 18.6 8.75 17.25Q7.4 15.9 7.4 14Q7.4 12.1 8.75 10.75Q10.1 9.4 12 9.4Q13.9 9.4 15.25 10.75Q16.6 12.1 16.6 14Q16.6 15.9 15.25 17.25Q13.9 18.6 12 18.6ZM12 17.9Q13.625 17.9 14.762 16.762Q15.9 15.625 15.9 14Q15.9 12.375 14.762 11.238Q13.625 10.1 12 10.1Q10.375 10.1 9.238 11.238Q8.1 12.375 8.1 14Q8.1 15.625 9.238 16.762Q10.375 17.9 12 17.9ZM13.15 15.65 11.65 14.15V11.65H12.35V13.85L13.65 15.15ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPunchClockSharpW100.displayName = 'AmauiIconMaterialPunchClockSharpW100';

export default IconMaterialPunchClockSharpW100;
