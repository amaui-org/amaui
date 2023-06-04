import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0Bar'

      short_name='SignalWifi0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M2.92,9.07C5.51,7.08,8.67,6,12,6 s6.49,1.08,9.08,3.07L12,18.17L2.92,9.07z"/></g>
    </Icon>
  );
});

IconMaterialSignalWifi0Bar.displayName = 'AmauiIconMaterialSignalWifi0Bar';

export default IconMaterialSignalWifi0Bar;
