import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBack'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h16v6.5l4-4v11l-4-4V20Zm2-2h12V6H4Zm1-2h10l-3.45-4.5-2.3 3-1.55-2Zm-1 2V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBack.displayName = 'AmauiIconMaterialVideoCameraBack';

export default IconMaterialVideoCameraBack;
