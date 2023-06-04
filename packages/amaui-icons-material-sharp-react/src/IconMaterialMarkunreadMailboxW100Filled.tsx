import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100Filled'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V9.3h3.5V2.65h6.05v2.7H7.5V14h2V9.3h11.2v11.4Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100Filled.displayName = 'AmauiIconMaterialMarkunreadMailboxW100Filled';

export default IconMaterialMarkunreadMailboxW100Filled;
