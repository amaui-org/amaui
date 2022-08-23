import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextWeekSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekSharpW100Filled'
      short_name='NextWeek'

      {...props}
    >
      <path d="M11 16.6 14.1 13.5 11 10.4 10.5 10.9 13.1 13.5 10.5 16.1ZM3.3 19.7V7.3H9.3V4.6H14.7V7.3H20.7V19.7ZM10 7.3H14V5.3H10Z"/>
    </Icon>
  );
});

IconMaterialNextWeekSharpW100Filled.displayName = 'AmauiIconMaterialNextWeekSharpW100Filled';

export default IconMaterialNextWeekSharpW100Filled;
