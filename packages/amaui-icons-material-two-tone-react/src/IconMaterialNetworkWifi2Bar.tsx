import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2Bar'

      short_name='NetworkWifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M16.78,13.38C15.4,12.5,13.76,12,12,12c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6 s6.49,1.08,9.08,3.07L16.78,13.38z" opacity=".3"/><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z"/></g>
    </Icon>
  );
});

IconMaterialNetworkWifi2Bar.displayName = 'AmauiIconMaterialNetworkWifi2Bar';

export default IconMaterialNetworkWifi2Bar;
