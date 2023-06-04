import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkPingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPingW100Filled'

      short_name='NetworkPing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 16.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.875L4.45 8.425q-.1-.1-.1-.25t.1-.25q.1-.1.238-.1.137 0 .237.1L12 14.975l5-5q-.125-.3-.188-.537-.062-.238-.062-.413 0-.675.475-1.15.475-.475 1.15-.475.675 0 1.15.475.475.475.475 1.15 0 .675-.475 1.15-.475.475-1.15.475-.15 0-.362-.05-.213-.05-.488-.175l-5.45 5.475h5.875q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingW100Filled.displayName = 'AmauiIconMaterialNetworkPingW100Filled';

export default IconMaterialNetworkPingW100Filled;
