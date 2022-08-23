import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditCalendarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarSharpW100Filled'
      short_name='EditCalendar'

      {...props}
    >
      <path d="M4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V11.8H19V10.8H5V20H9.7V20.7ZM19.725 15.425 18.5 14.2 19.475 13.225 20.7 14.45ZM12.7 21.225V20L17.8 14.9L19.025 16.125L13.925 21.225Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarSharpW100Filled.displayName = 'AmauiIconMaterialEditCalendarSharpW100Filled';

export default IconMaterialEditCalendarSharpW100Filled;
