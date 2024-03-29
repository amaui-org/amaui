import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyFilled'

      short_name='VpnKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6q2.025 0 3.538 1.137Q12.05 8.275 12.65 10H23v4h-2v4h-4v-4h-4.35q-.6 1.725-2.112 2.863Q9.025 18 7 18Zm0-4q.825 0 1.412-.588Q9 12.825 9 12t-.588-1.413Q7.825 10 7 10t-1.412.587Q5 11.175 5 12q0 .825.588 1.412Q6.175 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyFilled.displayName = 'AmauiIconMaterialVpnKeyFilled';

export default IconMaterialVpnKeyFilled;
