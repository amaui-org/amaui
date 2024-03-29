import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifi'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9Zm0-2.85 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275ZM11 15v-5h2v5Zm1-6q-.425 0-.712-.288Q11 8.425 11 8t.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8t-.287.712Q12.425 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifi.displayName = 'AmauiIconMaterialPermScanWifi';

export default IconMaterialPermScanWifi;
