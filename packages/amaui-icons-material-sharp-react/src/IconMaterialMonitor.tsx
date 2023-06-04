import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Monitor'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2l1-1H2V3h20v15h-5l1 1v2Zm-2-5h16V5H4Zm0 0V5v11Z"/>
    </Icon>
  );
});

IconMaterialMonitor.displayName = 'AmauiIconMaterialMonitor';

export default IconMaterialMonitor;
