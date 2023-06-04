import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchW100Filled'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.4 10.6V6.4h.7v3.025L9.425 2.1H6.4v-.7h4.2v4.2h-.7V2.575L2.575 9.9H5.6v.7Zm11.975 11.1-4.5-4.45.75-.75 3.8.75V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Z"/>
    </Icon>
  );
});

IconMaterialPinchW100Filled.displayName = 'AmauiIconMaterialPinchW100Filled';

export default IconMaterialPinchW100Filled;
