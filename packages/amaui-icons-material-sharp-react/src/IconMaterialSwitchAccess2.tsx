import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccess2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccess2'

      short_name='SwitchAccess2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h400v160h-80v-80H120v480h240v-80h80v160H40Zm480 0v-160h80v80h80v80H520Zm240 0v-80h80v-80h80v160H760ZM520-640v-160h160v80h-80v80h-80Zm320 0v-80h-80v-80h160v160h-80ZM120-240v-480 480Zm560-80-56-56 63-64H240v-80h447l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccess2.displayName = 'AmauiIconMaterialSwitchAccess2';

export default IconMaterialSwitchAccess2;
