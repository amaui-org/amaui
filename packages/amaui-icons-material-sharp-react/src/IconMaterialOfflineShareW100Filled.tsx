import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareW100Filled'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 18.2V2.8h9.4v15.4Zm.7-3.05h8v-9.3h-8Zm-3.4 5.75V5.7h.7v14.5h9v.7Zm5.025-8.95V9.5h3.7l-1.1-1.1.5-.5 1.95 1.95-1.95 1.95-.5-.5 1.1-1.1h-3v1.75Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareW100Filled.displayName = 'AmauiIconMaterialOfflineShareW100Filled';

export default IconMaterialOfflineShareW100Filled;
