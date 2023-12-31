import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectW100Filled'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-122 684-256h-54l28 28v56H302v-56l28-28H132v-532h60l-10 30-98-98 20-20 734 734-20 20Zm-3-156L302-788h526v510h-13Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectW100Filled.displayName = 'AmauiIconMaterialMimoDisconnectW100Filled';

export default IconMaterialMimoDisconnectW100Filled;
