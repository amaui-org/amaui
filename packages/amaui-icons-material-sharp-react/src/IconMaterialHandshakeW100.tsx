import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandshakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeW100'

      short_name='Handshake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.775 21.325-8.1-8.1 6.05-6.05 3.15 3.15L14.25 8.95l-5.9-5.9L1.9 9.5l1.325 1.325-.5.5L.9 9.5l7.45-7.45L11.6 5.3l3.275-3.275 8.1 8.1Zm-.025-1 10.2-10.2-7.075-7.075-2.75 2.75 3.15 3.15-2.4 2.4L9.7 8.175l-5.05 5.05 1.4 1.4 3.85-3.85.5.5-3.85 3.85 1.4 1.4 4.15-4.15.5.5-4.15 4.15 1.4 1.4 4.15-4.15.5.5-4.15 4.15ZM7.85 8Z"/>
    </Icon>
  );
});

IconMaterialHandshakeW100.displayName = 'AmauiIconMaterialHandshakeW100';

export default IconMaterialHandshakeW100;
