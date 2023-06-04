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
      <path d="M5.7 16.6v-.7h6.225L4.2 8.175l.5-.475 7.3 7.275 5-5q-.125-.3-.188-.537-.062-.238-.062-.413 0-.675.475-1.15.475-.475 1.15-.475.675 0 1.15.475.475.475.475 1.15 0 .675-.475 1.15-.475.475-1.15.475-.15 0-.362-.05-.213-.05-.488-.175l-5.45 5.475H18.3v.7Z"/>
    </Icon>
  );
});

IconMaterialNetworkPingW100Filled.displayName = 'AmauiIconMaterialNetworkPingW100Filled';

export default IconMaterialNetworkPingW100Filled;
