import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9Zm0-1 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275ZM11.65 15v-5h.7v5ZM12 8.75q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100.displayName = 'AmauiIconMaterialPermScanWifiW100';

export default IconMaterialPermScanWifiW100;
