import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockSharpFilled'
      short_name='PunchClock'

      {...props}
    >
      <path d="M3 22V6H6V1H18V6H21V22ZM8 6H16V3H8ZM12 18.2Q13.725 18.2 14.963 16.962Q16.2 15.725 16.2 14Q16.2 12.275 14.963 11.037Q13.725 9.8 12 9.8Q10.275 9.8 9.038 11.037Q7.8 12.275 7.8 14Q7.8 15.725 9.038 16.962Q10.275 18.2 12 18.2ZM13.15 15.85 11.5 14.2V11.5H12.5V13.8L13.85 15.15Z"/>
    </Icon>
  );
});

IconMaterialPunchClockSharpFilled.displayName = 'AmauiIconMaterialPunchClockSharpFilled';

export default IconMaterialPunchClockSharpFilled;
