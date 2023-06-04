import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100Filled'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.9 20.1v-3.4h-1v-4.2h2.125l-.95 3H20.7Zm-15.6-.6V3.3h17.4v6.2h-5.8v7.2H6.1Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100Filled.displayName = 'AmauiIconMaterialQuickreplyW100Filled';

export default IconMaterialQuickreplyW100Filled;
