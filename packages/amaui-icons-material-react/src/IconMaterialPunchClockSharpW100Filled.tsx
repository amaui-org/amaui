import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockSharpW100Filled'
      short_name='PunchClock'

      {...props}
    >
      <path d="M3.65 21.35V6.65H6.65V1.65H17.35V6.65H20.35V21.35ZM7.35 6.65H16.65V2.35H7.35ZM12 18.475Q13.875 18.475 15.175 17.175Q16.475 15.875 16.475 14Q16.475 12.125 15.175 10.825Q13.875 9.525 12 9.525Q10.125 9.525 8.825 10.825Q7.525 12.125 7.525 14Q7.525 15.875 8.825 17.175Q10.125 18.475 12 18.475ZM13.15 15.65 11.65 14.15V11.65H12.35V13.85L13.65 15.15Z"/>
    </Icon>
  );
});

IconMaterialPunchClockSharpW100Filled.displayName = 'AmauiIconMaterialPunchClockSharpW100Filled';

export default IconMaterialPunchClockSharpW100Filled;
