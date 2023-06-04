import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter7Filled'

      short_name='Counter7'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 776h80l80-319v-81H360v80h160l-80 320Zm40 200q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialCounter7Filled.displayName = 'AmauiIconMaterialCounter7Filled';

export default IconMaterialCounter7Filled;
