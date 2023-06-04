import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOff'

      short_name='SignalWifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.5 23.3-5.4-5.4L12 21 0 9q.8-.775 1.675-1.45Q2.55 6.875 3.5 6.3L.7 3.5l1.4-1.4 19.8 19.8Zm-2.625-8.25L7.425 4.6q1.125-.3 2.263-.45Q10.825 4 12 4q3.4 0 6.5 1.3T24 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOff.displayName = 'AmauiIconMaterialSignalWifiOff';

export default IconMaterialSignalWifiOff;
