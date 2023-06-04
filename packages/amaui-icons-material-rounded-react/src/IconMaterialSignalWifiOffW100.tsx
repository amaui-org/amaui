import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffW100'

      short_name='SignalWifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.975 14.15 8.5 5.675q.875-.2 1.75-.288Q11.125 5.3 12 5.3q2.65 0 5.1.825 2.45.825 4.5 2.425.225.175.238.462.012.288-.188.488ZM20.3 21.3l-5.25-5.25-2.525 2.55q-.125.125-.263.175-.137.05-.262.05-.15 0-.287-.05-.138-.05-.238-.15L2.35 9.5q-.2-.2-.2-.475 0-.275.225-.475.725-.575 1.55-1.063Q4.75 7 5.6 6.6L2.7 3.7q-.125-.125-.125-.25T2.7 3.2q.125-.125.25-.125t.25.125l17.6 17.6q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffW100.displayName = 'AmauiIconMaterialSignalWifiOffW100';

export default IconMaterialSignalWifiOffW100;
