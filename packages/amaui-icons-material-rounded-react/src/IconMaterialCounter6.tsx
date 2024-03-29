import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter6'

      short_name='Counter6'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 200h80q33 0 56.5-23.5T600 696v-80q0-33-23.5-56.5T520 536h-80v-80h80q17 0 28.5-11.5T560 416q0-17-11.5-28.5T520 376h-80q-33 0-56.5 23.5T360 456v240q0 33 23.5 56.5T440 776Zm0-160h80v80h-80v-80Z"/>
    </Icon>
  );
});

IconMaterialCounter6.displayName = 'AmauiIconMaterialCounter6';

export default IconMaterialCounter6;
