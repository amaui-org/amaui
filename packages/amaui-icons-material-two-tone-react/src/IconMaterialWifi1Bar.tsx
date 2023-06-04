import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1Bar'

      short_name='Wifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M15.53,17.46L12,21l-3.53-3.54C9.37,16.56,10.62,16,12,16S14.63,16.56,15.53,17.46z"/></g>
    </Icon>
  );
});

IconMaterialWifi1Bar.displayName = 'AmauiIconMaterialWifi1Bar';

export default IconMaterialWifi1Bar;
