import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarSharp'
      short_name='PermContactCalendar'

      {...props}
    >
      <path d="M7 20H17V19.75Q15.95 18.875 14.675 18.438Q13.4 18 12 18Q10.6 18 9.325 18.438Q8.05 18.875 7 19.75ZM5 18.85Q6.35 17.525 8.138 16.762Q9.925 16 12 16Q14.075 16 15.863 16.762Q17.65 17.525 19 18.85V6H5ZM12 14Q10.55 14 9.525 12.975Q8.5 11.95 8.5 10.5Q8.5 9.05 9.525 8.025Q10.55 7 12 7Q13.45 7 14.475 8.025Q15.5 9.05 15.5 10.5Q15.5 11.95 14.475 12.975Q13.45 14 12 14ZM12 12Q12.625 12 13.062 11.562Q13.5 11.125 13.5 10.5Q13.5 9.875 13.062 9.438Q12.625 9 12 9Q11.375 9 10.938 9.438Q10.5 9.875 10.5 10.5Q10.5 11.125 10.938 11.562Q11.375 12 12 12ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5Q12 10.5 12 10.5ZM7 20Q8.05 20 9.325 20Q10.6 20 12 20Q13.4 20 14.675 20Q15.95 20 17 20Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarSharp.displayName = 'AmauiIconMaterialPermContactCalendarSharp';

export default IconMaterialPermContactCalendarSharp;
