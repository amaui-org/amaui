import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextWeekSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekSharp'
      short_name='NextWeek'

      {...props}
    >
      <path d="M11 17.5 15 13.5 11 9.5 9.6 10.9 12.2 13.5 9.6 16.1ZM2 21V6H8V2H16V6H22V21ZM10 6H14V4H10ZM4 19H20V8H4ZM4 19V8Z"/>
    </Icon>
  );
});

IconMaterialNextWeekSharp.displayName = 'AmauiIconMaterialNextWeekSharp';

export default IconMaterialNextWeekSharp;
