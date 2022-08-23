import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarSharpFilled'
      short_name='PermContactCalendar'

      {...props}
    >
      <path d="M5 18.85Q6.35 17.525 8.138 16.762Q9.925 16 12 16Q14.075 16 15.863 16.762Q17.65 17.525 19 18.85V6H5ZM12 14Q10.55 14 9.525 12.975Q8.5 11.95 8.5 10.5Q8.5 9.05 9.525 8.025Q10.55 7 12 7Q13.45 7 14.475 8.025Q15.5 9.05 15.5 10.5Q15.5 11.95 14.475 12.975Q13.45 14 12 14ZM3 22V4H6V2H8V4H16V2H18V4H21V22Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarSharpFilled.displayName = 'AmauiIconMaterialPermContactCalendarSharpFilled';

export default IconMaterialPermContactCalendarSharpFilled;
