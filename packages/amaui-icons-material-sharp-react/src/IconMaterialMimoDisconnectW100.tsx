import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnectW100'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-172v-56l28-28H132v-532h60l28 28h-60v476h498L84-856l20-20 734 734-20 20-130-134h-58l28 28v56H302Zm519-106-21-21v-461H330l-28-28h526v510h-7ZM553-540Zm-152 1Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnectW100.displayName = 'AmauiIconMaterialMimoDisconnectW100';

export default IconMaterialMimoDisconnectW100;
