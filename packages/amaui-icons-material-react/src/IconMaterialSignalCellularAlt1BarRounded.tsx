import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1BarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1BarRounded'
      short_name='SignalCellularAlt1Bar'

      {...props}
    >
      <path d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5V15.5Q5 14.875 5.438 14.438Q5.875 14 6.5 14Q7.125 14 7.562 14.438Q8 14.875 8 15.5V18.5Q8 19.125 7.562 19.562Q7.125 20 6.5 20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1BarRounded.displayName = 'AmauiIconMaterialSignalCellularAlt1BarRounded';

export default IconMaterialSignalCellularAlt1BarRounded;
