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
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm80-200q17 0 28.5-11.5T600 736q0-17-11.5-28.5T560 696H440v-80h80q33 0 56.5-23.5T600 536v-80q0-33-23.5-56.5T520 376H400q-17 0-28.5 11.5T360 416q0 17 11.5 28.5T400 456h120v80h-80q-33 0-56.5 23.5T360 616v120q0 17 11.5 28.5T400 776h160Z"/>
    </Icon>
  );
});

IconMaterialCounter2Filled.displayName = 'AmauiIconMaterialCounter2Filled';

export default IconMaterialCounter2Filled;
