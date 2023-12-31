import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAdd'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-160 4-4 160Zm-80 80v-320h720v80H200v160h400v80H120Zm0-400v-320h720v320H120Zm80-80h560v-160H200v160Zm0 0v-160 160Zm560 480h-80v-80h80v-80h80v80h80v80h-80v80h-80v-80Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAdd.displayName = 'AmauiIconMaterialSplitscreenAdd';

export default IconMaterialSplitscreenAdd;
