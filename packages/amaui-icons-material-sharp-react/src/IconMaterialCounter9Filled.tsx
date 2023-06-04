import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter9Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter9Filled'

      short_name='Counter9'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-80-200h200V376H360v240h160v80H400v80Zm120-240h-80v-80h80v80Z"/>
    </Icon>
  );
});

IconMaterialCounter9Filled.displayName = 'AmauiIconMaterialCounter9Filled';

export default IconMaterialCounter9Filled;
