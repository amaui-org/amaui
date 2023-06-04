import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackW100Filled'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.925 18.7V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm2.55-3.05h8.3l-2.55-3.4-2.5 3.1-1.6-1.85Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackW100Filled.displayName = 'AmauiIconMaterialVideoCameraBackW100Filled';

export default IconMaterialVideoCameraBackW100Filled;
