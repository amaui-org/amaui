import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandshakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeW100Filled'

      short_name='Handshake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.775 21.05-1.4-1.4 4.175-4.175-.5-.5-4.175 4.175-1.4-1.4 4.175-4.175-.5-.5-4.175 4.175-1.4-1.4 3.875-3.875-.5-.5-3.875 3.875-1.4-1.4L10.2 8.425l2.9 2.9 2.4-2.4-3.375-3.375 2.925-2.925 7.575 7.575ZM4.4 13.225l-3.25-3.25L8.375 2.75l6.15 6.15-1.425 1.425-2.9-2.9Z"/>
    </Icon>
  );
});

IconMaterialHandshakeW100Filled.displayName = 'AmauiIconMaterialHandshakeW100Filled';

export default IconMaterialHandshakeW100Filled;
