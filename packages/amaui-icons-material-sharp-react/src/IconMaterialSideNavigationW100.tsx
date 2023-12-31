import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSideNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SideNavigationW100'

      short_name='SideNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-28h280v-560H480v560Z"/>
    </Icon>
  );
});

IconMaterialSideNavigationW100.displayName = 'AmauiIconMaterialSideNavigationW100';

export default IconMaterialSideNavigationW100;
