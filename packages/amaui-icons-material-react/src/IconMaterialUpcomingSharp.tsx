import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingSharp'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.6 10.8 16.2 9.4 19.75 5.85 21.15 7.25ZM11 8V3H13V8ZM6.4 10.8 2.85 7.25 4.25 5.85 7.8 9.4ZM4 19H20V14H16.6Q15.975 15.375 14.738 16.188Q13.5 17 12 17Q10.5 17 9.262 16.188Q8.025 15.375 7.4 14H4ZM2 21V12H9Q9 13.25 9.875 14.125Q10.75 15 12 15Q13.25 15 14.125 14.125Q15 13.25 15 12H22V21ZM4 19H7.4Q8.025 19 9.262 19Q10.5 19 12 19Q13.5 19 14.738 19Q15.975 19 16.6 19H20Z"/>
    </Icon>
  );
});

IconMaterialUpcomingSharp.displayName = 'AmauiIconMaterialUpcomingSharp';

export default IconMaterialUpcomingSharp;
