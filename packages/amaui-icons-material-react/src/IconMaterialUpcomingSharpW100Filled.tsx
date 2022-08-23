import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingSharpW100Filled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.35 10.65 16.85 10.15 19.5 7.5 20 8ZM11.65 8.05V4.35H12.35V8.05ZM6.65 10.65 4 8 4.5 7.5 7.15 10.15ZM3.3 19.7V13.3H8Q8.425 14.65 9.525 15.475Q10.625 16.3 12 16.3Q13.425 16.3 14.525 15.475Q15.625 14.65 16 13.3H20.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialUpcomingSharpW100Filled.displayName = 'AmauiIconMaterialUpcomingSharpW100Filled';

export default IconMaterialUpcomingSharpW100Filled;
