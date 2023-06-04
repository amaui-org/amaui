import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100Filled'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9ZM11.65 15h.7v-5h-.7ZM12 8.75q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100Filled.displayName = 'AmauiIconMaterialPermScanWifiW100Filled';

export default IconMaterialPermScanWifiW100Filled;
