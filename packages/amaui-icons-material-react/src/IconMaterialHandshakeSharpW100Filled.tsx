import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandshakeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeSharpW100Filled'
      short_name='Handshake'

      {...props}
    >
      <path d="M11.775 21.05 10.375 19.65 14.55 15.475 14.05 14.975 9.875 19.15 8.475 17.75 12.65 13.575 12.15 13.075 7.975 17.25 6.575 15.85 10.45 11.975 9.95 11.475 6.075 15.35 4.675 13.95 10.2 8.425 13.1 11.325 15.5 8.925 12.125 5.55 15.05 2.625 22.625 10.2ZM4.4 13.225 1.15 9.975 8.375 2.75 14.525 8.9 13.1 10.325 10.2 7.425Z"/>
    </Icon>
  );
});

IconMaterialHandshakeSharpW100Filled.displayName = 'AmauiIconMaterialHandshakeSharpW100Filled';

export default IconMaterialHandshakeSharpW100Filled;
