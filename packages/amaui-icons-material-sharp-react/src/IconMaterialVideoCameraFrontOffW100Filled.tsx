import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100Filled'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 15.25 17.4 12.5v2.25L7.95 5.3h9.45v6.2l2.75-2.75Zm-1.1 5L2.95 4.15l.5-.5 16.1 16.1ZM5.15 5.35l12.2 12.2v1.15H4V5.35Zm2.375 9.75h6.2v-.05q0-.7-.887-1.175-.888-.475-2.213-.475-1.325 0-2.212.475-.888.475-.888 1.175Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100Filled.displayName = 'AmauiIconMaterialVideoCameraFrontOffW100Filled';

export default IconMaterialVideoCameraFrontOffW100Filled;
