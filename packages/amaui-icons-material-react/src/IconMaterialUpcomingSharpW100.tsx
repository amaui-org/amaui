import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingSharpW100'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.35 10.65 16.85 10.15 19.5 7.5 20 8ZM11.65 8.05V4.35H12.35V8.05ZM6.65 10.65 4 8 4.5 7.5 7.15 10.15ZM4 19H20V14H16.6Q15.95 15.375 14.725 16.188Q13.5 17 12 17Q10.5 17 9.275 16.188Q8.05 15.375 7.4 14H4ZM3.3 19.7V13.3H8Q8.425 14.65 9.525 15.475Q10.625 16.3 12 16.3Q13.425 16.3 14.525 15.475Q15.625 14.65 16 13.3H20.7V19.7ZM4 19H7.4Q8.05 19 9.275 19Q10.5 19 12 19Q13.5 19 14.725 19Q15.95 19 16.6 19H20Z"/>
    </Icon>
  );
});

IconMaterialUpcomingSharpW100.displayName = 'AmauiIconMaterialUpcomingSharpW100';

export default IconMaterialUpcomingSharpW100;
