import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermScanWifiSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiSharp'
      short_name='PermScanWifi'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9ZM12 18.15 21.1 9.05Q19.125 7.55 16.8 6.775Q14.475 6 12 6Q9.525 6 7.2 6.775Q4.875 7.55 2.9 9.05ZM11 15H13V10H11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 18.15Q12 18.15 12 18.15Q12 18.15 12 18.15Q12 18.15 12 18.15Q12 18.15 12 18.15Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiSharp.displayName = 'AmauiIconMaterialPermScanWifiSharp';

export default IconMaterialPermScanWifiSharp;
