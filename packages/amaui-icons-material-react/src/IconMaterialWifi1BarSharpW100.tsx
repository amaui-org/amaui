import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi1BarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarSharpW100'
      short_name='Wifi1Bar'

      {...props}
    >
      <path d="M12 21 9.875 18.875Q10.3 18.45 10.838 18.225Q11.375 18 12 18Q12.625 18 13.163 18.225Q13.7 18.45 14.125 18.875Z"/>
    </Icon>
  );
});

IconMaterialWifi1BarSharpW100.displayName = 'AmauiIconMaterialWifi1BarSharpW100';

export default IconMaterialWifi1BarSharpW100;
