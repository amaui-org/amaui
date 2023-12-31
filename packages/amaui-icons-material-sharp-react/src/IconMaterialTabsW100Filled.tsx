import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabsW100Filled'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-312H200v312Zm280-440h240v-80H480v80Z"/>
    </Icon>
  );
});

IconMaterialTabsW100Filled.displayName = 'AmauiIconMaterialTabsW100Filled';

export default IconMaterialTabsW100Filled;
