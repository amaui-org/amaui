import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermScanWifiSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiSharpFilled'
      short_name='PermScanWifi'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9ZM11 15H13V10H11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiSharpFilled.displayName = 'AmauiIconMaterialPermScanWifiSharpFilled';

export default IconMaterialPermScanWifiSharpFilled;
