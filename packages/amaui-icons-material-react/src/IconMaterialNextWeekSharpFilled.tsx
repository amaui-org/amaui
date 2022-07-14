import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextWeekSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekSharpFilled'
      short_name='NextWeek'

      {...props}
    >
      <path d="M11 17.5 15 13.5 11 9.5 9.6 10.9 12.2 13.5 9.6 16.1ZM2 21V6H8V2H16V6H22V21ZM10 6H14V4H10Z"/>
    </Icon>
  );
});

export default IconMaterialNextWeekSharpFilled;
