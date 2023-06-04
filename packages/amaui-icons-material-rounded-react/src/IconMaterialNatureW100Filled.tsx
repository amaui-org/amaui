import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureW100Filled'

      short_name='Nature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 20.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5V15.2H9q-1.55 0-2.625-1.075T5.3 11.5q0-1.275.875-2.225.875-.95 2.075-1.475.2-2 1.2-3t2.55-1q1.55 0 2.55 1 1 1 1.2 3 1.225.475 2.087 1.45.863.975.863 2.25 0 1.55-1.075 2.625T15 15.2h-2.65v4.95h5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNatureW100Filled.displayName = 'AmauiIconMaterialNatureW100Filled';

export default IconMaterialNatureW100Filled;
