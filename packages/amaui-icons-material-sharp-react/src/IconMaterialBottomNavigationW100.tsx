import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomNavigationW100'

      short_name='BottomNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-168h560v-420H200v420Zm0 28v112h560v-112H200Zm0 0v112-112Z"/>
    </Icon>
  );
});

IconMaterialBottomNavigationW100.displayName = 'AmauiIconMaterialBottomNavigationW100';

export default IconMaterialBottomNavigationW100;
