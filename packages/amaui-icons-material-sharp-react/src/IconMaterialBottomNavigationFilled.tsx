import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomNavigationFilled'

      short_name='BottomNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-240h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialBottomNavigationFilled.displayName = 'AmauiIconMaterialBottomNavigationFilled';

export default IconMaterialBottomNavigationFilled;
