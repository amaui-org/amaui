import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenW100'

      short_name='CloseFullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 12q-.325 0-.537-.213Q12 11.575 12 11.25v-5.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.175l7-7.025q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-7.025 7h5.175q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM3.8 20.2q-.1-.1-.1-.25t.1-.25l7.025-7H5.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.6q.325 0 .538.212.212.213.212.538v5.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.175l-7 7.025q-.1.1-.25.1t-.25-.1Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenW100.displayName = 'AmauiIconMaterialCloseFullscreenW100';

export default IconMaterialCloseFullscreenW100;
