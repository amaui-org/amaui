import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAdd'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-760H599h5-4 160Zm-240-80h320v480h-80v-400H600v640h-80v-720ZM120-120v-720h320v720H120Zm240-640H200v560h160v-560Zm0 0H200h160ZM760-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAdd.displayName = 'AmauiIconMaterialSplitscreenVerticalAdd';

export default IconMaterialSplitscreenVerticalAdd;
