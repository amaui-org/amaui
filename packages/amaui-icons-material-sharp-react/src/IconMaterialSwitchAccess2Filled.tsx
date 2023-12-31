import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccess2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccess2Filled'

      short_name='SwitchAccess2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-160v-160h80v80h80v80H520Zm240 0v-80h80v-80h80v160H760ZM520-640v-160h160v80h-80v80h-80Zm320 0v-80h-80v-80h160v160h-80ZM680-320l-56-56 63-64H240v-80h447l-63-64 56-56 160 160-160 160ZM40-160v-640h400v200H160v240h280v200H40Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccess2Filled.displayName = 'AmauiIconMaterialSwitchAccess2Filled';

export default IconMaterialSwitchAccess2Filled;
