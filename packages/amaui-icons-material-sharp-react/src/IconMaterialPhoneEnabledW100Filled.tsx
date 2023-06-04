import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100Filled'

      short_name='PhoneEnabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.375 19.55q-.225 0-.512-.012-.288-.013-.513-.063v-3.9l3.35-.7 2.55 2.675q2.35-1.3 4.075-3t3.125-4.05L14.8 8.075l.825-3.775h3.95q.05.25.063.525.012.275.012.525 0 2.425-1.312 4.962-1.313 2.538-3.388 4.601-2.075 2.062-4.6 3.362-2.525 1.3-4.975 1.275Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100Filled.displayName = 'AmauiIconMaterialPhoneEnabledW100Filled';

export default IconMaterialPhoneEnabledW100Filled;
