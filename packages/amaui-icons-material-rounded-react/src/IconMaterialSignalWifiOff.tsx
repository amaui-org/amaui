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
      <path d="M17.875 15.05 7.425 4.6q1.125-.3 2.263-.45Q10.825 4 12 4q3.15 0 6.038 1.125 2.887 1.125 5.237 3.2.3.275.313.675.012.4-.288.7ZM19.8 22.6l-4.7-4.7-2.4 2.4q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212L.7 9.7Q.4 9.4.413 9q.012-.4.312-.675.65-.575 1.337-1.088Q2.75 6.725 3.5 6.3L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOff.displayName = 'AmauiIconMaterialSignalWifiOff';

export default IconMaterialSignalWifiOff;
