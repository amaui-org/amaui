import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGestureSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureSelectW100'

      short_name='GestureSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M110-508v-40h40v40h-40Zm700 0v-40h40v40h-40ZM110-648v-40h40v40h-40Zm700 0v-40h40v40h-40ZM110-788v-40h40v40h-40Zm140 280v-40h40v40h-40Zm420 0v-40h40v40h-40Zm140-280v-40h40v40h-40Zm-560 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40ZM464.848-119Q446-119 429.5-126t-30.269-20.631L234-311l33-34 111 23v-332h28v369l-139-34 151 153q10 10 21.5 14.5T465-147h131q43.725 0 74.862-31.137Q702-209.275 702-253v-131h28v131q0 56-39 95t-95 39H464.848ZM486-369v-175h28v175h-28Zm108 0v-115h28v115h-28Zm2 222H418h178Z"/>
    </Icon>
  );
});

IconMaterialGestureSelectW100.displayName = 'AmauiIconMaterialGestureSelectW100';

export default IconMaterialGestureSelectW100;
