import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShare'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V1h12v18Zm2-5h8V6h-8Zm0-10h8V3h-8Zm0 13h8v-1h-8Zm-6 6V5h2v16h10v2Zm7-11V8.75h3.15l-.7-.7L14.5 7 17 9.5 14.5 12l-1.05-1.05.7-.7H12.5V12Zm-1-8V3v1Zm0 13v-1 1Z"/>
    </Icon>
  );
});

IconMaterialOfflineShare.displayName = 'AmauiIconMaterialOfflineShare';

export default IconMaterialOfflineShare;
