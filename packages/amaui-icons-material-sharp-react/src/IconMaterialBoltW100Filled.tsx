import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltW100Filled'

      short_name='Bolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.3 19.7.85-6H8.025l4.825-9.4h.85l-.85 6h3.125l-4.825 9.4Z"/>
    </Icon>
  );
});

IconMaterialBoltW100Filled.displayName = 'AmauiIconMaterialBoltW100Filled';

export default IconMaterialBoltW100Filled;
