import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackW100'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.925 18.7V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm1.85-2.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM4.625 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackW100.displayName = 'AmauiIconMaterialVideoCameraBackW100';

export default IconMaterialVideoCameraBackW100;
