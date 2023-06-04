import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxW100'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14v-4H4v10h16V10H9.5v-.7h11.2v11.4H3.3V9.3h3.5V2.65h6.05v2.7H7.5V14ZM4 14v-4 10-10 4Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxW100.displayName = 'AmauiIconMaterialMarkunreadMailboxW100';

export default IconMaterialMarkunreadMailboxW100;
