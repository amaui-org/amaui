import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareW100'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 18.2V2.8h9.4v15.4Zm.7-3.05h8v-9.3h-8Zm0-10h8V3.5h-8Zm0 12.35h8v-1.65h-8Zm-3.4 3.4V5.7h.7v14.5h9v.7Zm5.025-8.95V9.5h3.7l-1.1-1.1.5-.5 1.95 1.95-1.95 1.95-.5-.5 1.1-1.1h-3v1.75ZM9.35 5.15V3.5v1.65Zm0 12.35v-1.65 1.65Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareW100.displayName = 'AmauiIconMaterialOfflineShareW100';

export default IconMaterialOfflineShareW100;
