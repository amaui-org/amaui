import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fpsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsW100Filled'

      short_name='30fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 17.85v-.7h6v-4.8h-6v-.7h6v-4.8h-6v-.7h6.7v11.7Zm10.7-.7h6.3V6.85h-6.3Zm-.7.7V6.15h7.7v11.7Z"/>
    </Icon>
  );
});

IconMaterial30fpsW100Filled.displayName = 'AmauiIconMaterial30fpsW100Filled';

export default IconMaterial30fpsW100Filled;
