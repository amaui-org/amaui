import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter0Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter0Filled'

      short_name='Counter0'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM360 776h240V376H360v400Zm80-80V456h80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialCounter0Filled.displayName = 'AmauiIconMaterialCounter0Filled';

export default IconMaterialCounter0Filled;
