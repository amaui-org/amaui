import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomNavigation'

      short_name='BottomNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-240h560v-400H200v400Zm0 80v80h560v-80H200Zm0 0v80-80Z"/>
    </Icon>
  );
});

IconMaterialBottomNavigation.displayName = 'AmauiIconMaterialBottomNavigation';

export default IconMaterialBottomNavigation;
