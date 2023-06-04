import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyW100Filled'

      short_name='VpnKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3q1.775 0 3.012 1.075Q11.25 9.45 11.6 11h10.1v2H19v3.7h-2V13h-5.4q-.35 1.55-1.588 2.625Q8.775 16.7 7 16.7ZM7 13q.425 0 .713-.3Q8 12.4 8 12q0-.425-.287-.713Q7.425 11 7 11q-.4 0-.7.287-.3.288-.3.713 0 .4.3.7.3.3.7.3Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyW100Filled.displayName = 'AmauiIconMaterialVpnKeyW100Filled';

export default IconMaterialVpnKeyW100Filled;
