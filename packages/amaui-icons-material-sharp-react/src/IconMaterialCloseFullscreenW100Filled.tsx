import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenW100Filled'

      short_name='CloseFullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.05 20.425-.475-.475 7.25-7.25H5.3V12H12v6.7h-.7v-5.525ZM12 12V5.3h.7v5.525l7.25-7.25.475.475-7.25 7.25H18.7v.7Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenW100Filled.displayName = 'AmauiIconMaterialCloseFullscreenW100Filled';

export default IconMaterialCloseFullscreenW100Filled;
