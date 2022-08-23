import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi1BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarSharpFilled'
      short_name='Wifi1Bar'

      {...props}
    >
      <path d="M12 21 8.475 17.45Q9.15 16.775 10.05 16.387Q10.95 16 12 16Q13.05 16 13.95 16.387Q14.85 16.775 15.525 17.45Z"/>
    </Icon>
  );
});

IconMaterialWifi1BarSharpFilled.displayName = 'AmauiIconMaterialWifi1BarSharpFilled';

export default IconMaterialWifi1BarSharpFilled;
