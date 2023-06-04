import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOffW100Filled'

      short_name='VpnKeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 12.7 13.7h-1.3q-.5 1.325-1.7 2.163-1.2.837-2.7.837-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.775 1.15-3.1 1.15-1.325 2.9-1.55l-3.2-3.2.5-.5 16.7 16.7ZM7 13q.425 0 .713-.288Q8 12.425 8 12q0-.225-.062-.4-.063-.175-.188-.3t-.325-.213Q7.225 11 7 11q-.425 0-.713.287Q6 11.575 6 12t.287.712Q6.575 13 7 13Zm12 3.175L13.825 11H21.7v2H19v3.175Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffW100Filled.displayName = 'AmauiIconMaterialVpnKeyOffW100Filled';

export default IconMaterialVpnKeyOffW100Filled;
