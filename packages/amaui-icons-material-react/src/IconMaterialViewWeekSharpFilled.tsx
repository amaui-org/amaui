import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekSharpFilled'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M2 20V4H7.325V20ZM9.35 20V4H14.675V20ZM16.675 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialViewWeekSharpFilled;
