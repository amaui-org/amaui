import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekSharpW100Filled'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M3.3 18.7V5.3H8.625V18.7ZM9.325 18.7V5.3H14.675V18.7ZM15.375 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialViewWeekSharpW100Filled.displayName = 'AmauiIconMaterialViewWeekSharpW100Filled';

export default IconMaterialViewWeekSharpW100Filled;
