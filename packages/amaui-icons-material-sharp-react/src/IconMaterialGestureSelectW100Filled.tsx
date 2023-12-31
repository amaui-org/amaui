import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGestureSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureSelectW100Filled'

      short_name='GestureSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M110-508v-40h40v40h-40Zm700 0v-40h40v40h-40ZM110-648v-40h40v40h-40Zm700 0v-40h40v40h-40ZM110-788v-40h40v40h-40Zm140 280v-40h40v40h-40Zm420 0v-40h40v40h-40Zm140-280v-40h40v40h-40Zm-560 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40ZM464.848-119Q446-119 429.5-126t-30.269-20.631L234-311l33-34 111 23v-332h28v284h80v-174h28v174h80v-114h28v114h80v-14h28v131q0 56-39 95t-95 39H464.848Z"/>
    </Icon>
  );
});

IconMaterialGestureSelectW100Filled.displayName = 'AmauiIconMaterialGestureSelectW100Filled';

export default IconMaterialGestureSelectW100Filled;
