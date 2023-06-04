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
      <path d="M13.35 13.8q.925 0 1.625-.563.7-.562.7-1.437h3.675V4h-12v7.8h3.675q0 .875.7 1.437.7.563 1.625.563Zm-6.7 2.9V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100Filled.displayName = 'AmauiIconMaterialAllInboxW100Filled';

export default IconMaterialAllInboxW100Filled;
