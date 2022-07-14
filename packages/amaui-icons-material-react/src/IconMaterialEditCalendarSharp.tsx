import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditCalendarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarSharp'
      short_name='EditCalendar'

      {...props}
    >
      <path d="M3 22V4H6V2H8V4H16V2H18V4H21V12H19V10H5V20H12V22ZM5 8H19V6H5ZM22.125 17 20 14.875 21.425 13.45 23.55 15.575ZM14 23V20.875L19.3 15.575L21.425 17.7L16.125 23ZM5 8V6V8Z"/>
    </Icon>
  );
});

export default IconMaterialEditCalendarSharp;
