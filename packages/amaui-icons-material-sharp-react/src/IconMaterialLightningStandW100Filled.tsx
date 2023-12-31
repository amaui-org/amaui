import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightningStandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightningStandW100Filled'

      short_name='LightningStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-134 0-201-32t-67-96q0-41 17-63.5t46-31.5q-11 5-17 16t-6 27q0 24 15 42.5t44 31q29 12.5 71.5 19.5t97.5 7q55 0 97.5-7t71.5-19.5q29-12.5 44-31t15-42.5q0-16-6-27t-17-16q29 9 46 31.5t17 63.5q0 64-67 96T480-92Zm0-108q-87 0-143.5-21T280-274q0-32 56.5-53T480-348q87 0 143.5 21t56.5 53q0 32-56.5 53T480-200Zm-32-200v-160h-64l128-224v160h64L448-400Z"/>
    </Icon>
  );
});

IconMaterialLightningStandW100Filled.displayName = 'AmauiIconMaterialLightningStandW100Filled';

export default IconMaterialLightningStandW100Filled;
