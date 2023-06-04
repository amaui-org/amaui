import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2Bar'

      short_name='Wifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g display="none"><rect display="inline" fill="none" height="24" width="24"/></g><g><path d="M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z"/></g>
    </Icon>
  );
});

IconMaterialWifi2Bar.displayName = 'AmauiIconMaterialWifi2Bar';

export default IconMaterialWifi2Bar;
