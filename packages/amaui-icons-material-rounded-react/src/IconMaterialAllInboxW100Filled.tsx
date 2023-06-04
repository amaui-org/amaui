import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100Filled'

      short_name='AllInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.35 13.8q.925 0 1.513-.45.587-.45.737-1.175.05-.2.175-.288.125-.087.325-.087h3.25v-7q0-.35-.225-.575Q18.9 4 18.55 4H8.15q-.35 0-.575.225-.225.225-.225.575v7h3.25q.2 0 .325.087.125.088.175.288.15.725.738 1.175.587.45 1.512.45Zm-5.2 2.9q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100Filled.displayName = 'AmauiIconMaterialAllInboxW100Filled';

export default IconMaterialAllInboxW100Filled;
