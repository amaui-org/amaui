import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter8Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter8Filled'

      short_name='Counter8'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm-40-200h80q33 0 56.5-23.5T600 696v-60q0-25-17.5-42.5T540 576q25 0 42.5-17.5T600 516v-60q0-33-23.5-56.5T520 376h-80q-33 0-56.5 23.5T360 456v60q0 25 17.5 42.5T420 576q-25 0-42.5 17.5T360 636v60q0 33 23.5 56.5T440 776Zm0-320h80v80h-80v-80Zm0 240v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialCounter8Filled.displayName = 'AmauiIconMaterialCounter8Filled';

export default IconMaterialCounter8Filled;
