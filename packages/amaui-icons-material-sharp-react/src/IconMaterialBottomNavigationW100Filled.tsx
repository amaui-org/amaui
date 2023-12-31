import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomNavigationW100Filled'

      short_name='BottomNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-168h560v-420H200v420Z"/>
    </Icon>
  );
});

IconMaterialBottomNavigationW100Filled.displayName = 'AmauiIconMaterialBottomNavigationW100Filled';

export default IconMaterialBottomNavigationW100Filled;
