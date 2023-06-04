import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffW100Filled'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.625 20.7V10.3l-6.05-6.05.5-.5 16.95 16.95-.5.5-5.5-5.5v5Zm-2-16.25V3.3h9.4v2.35h-8.2Zm7.4 7.4-5.5-5.5h7.5V7.6l-2 3Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffW100Filled.displayName = 'AmauiIconMaterialFlashlightOffW100Filled';

export default IconMaterialFlashlightOffW100Filled;
