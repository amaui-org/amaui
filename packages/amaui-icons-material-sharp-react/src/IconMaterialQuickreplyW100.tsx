import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h17.4v6.2H20V4H4v13.8L5.8 16h9.1v.7H6.1ZM4 16v1.8V4Zm14.9 4.1v-3.4h-1v-4.2h2.125l-.95 3H20.7Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100.displayName = 'AmauiIconMaterialQuickreplyW100';

export default IconMaterialQuickreplyW100;
