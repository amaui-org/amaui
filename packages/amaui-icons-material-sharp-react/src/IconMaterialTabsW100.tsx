import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabsW100'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-312H200v312Zm0-340h560v-220H200v220Zm280-100h240v-80H480v80ZM200-540v-220 220Z"/>
    </Icon>
  );
});

IconMaterialTabsW100.displayName = 'AmauiIconMaterialTabsW100';

export default IconMaterialTabsW100;
