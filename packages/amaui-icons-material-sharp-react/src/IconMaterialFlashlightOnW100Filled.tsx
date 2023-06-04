import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100Filled'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 5.65V3.3h9.4v2.35Zm4.7 9.2q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM9.3 20.7V10.6l-2-3V6.35h9.4V7.6l-2 3v10.1Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100Filled.displayName = 'AmauiIconMaterialFlashlightOnW100Filled';

export default IconMaterialFlashlightOnW100Filled;
