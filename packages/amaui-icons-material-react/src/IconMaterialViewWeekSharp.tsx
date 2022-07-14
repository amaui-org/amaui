import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekSharp'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4 18H8V6H4ZM10 18H14V6H10ZM16 18H20V6H16ZM22 20H2V4H22Z"/>
    </Icon>
  );
});

export default IconMaterialViewWeekSharp;
