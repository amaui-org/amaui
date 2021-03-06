import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifi1BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarTwoTone'
      short_name='Wifi1Bar'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M15.53,17.46L12,21l-3.53-3.54C9.37,16.56,10.62,16,12,16S14.63,16.56,15.53,17.46z"/></g>
    </Icon>
  );
});

export default IconMaterialWifi1BarTwoTone;
