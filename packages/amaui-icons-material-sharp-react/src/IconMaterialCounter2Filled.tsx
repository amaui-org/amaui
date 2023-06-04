import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter2Filled'

      short_name='Counter2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM360 776h240v-80H440v-80h160V376H360v80h160v80H360v240Z"/>
    </Icon>
  );
});

IconMaterialCounter2Filled.displayName = 'AmauiIconMaterialCounter2Filled';

export default IconMaterialCounter2Filled;
