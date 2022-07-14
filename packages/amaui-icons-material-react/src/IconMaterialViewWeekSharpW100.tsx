import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekSharpW100'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4 18H8.875V6H4ZM9.575 18H14.425V6H9.575ZM15.125 18H20V6H15.125ZM20.7 18.7H3.3V5.3H20.7Z"/>
    </Icon>
  );
});

export default IconMaterialViewWeekSharpW100;
