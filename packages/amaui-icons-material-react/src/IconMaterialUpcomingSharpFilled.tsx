import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingSharpFilled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.6 10.8 16.2 9.4 19.75 5.85 21.15 7.25ZM11 8V3H13V8ZM6.4 10.8 2.85 7.25 4.25 5.85 7.8 9.4ZM2 21V12H9Q9 13.25 9.875 14.125Q10.75 15 12 15Q13.25 15 14.125 14.125Q15 13.25 15 12H22V21Z"/>
    </Icon>
  );
});

IconMaterialUpcomingSharpFilled.displayName = 'AmauiIconMaterialUpcomingSharpFilled';

export default IconMaterialUpcomingSharpFilled;
