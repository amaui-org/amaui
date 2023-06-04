import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseFullscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreen'

      short_name='CloseFullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 22 2 20.6 8.6 14H4v-2h8v8h-2v-4.6ZM12 12V4h2v4.6L20.6 2 22 3.4 15.4 10H20v2Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreen.displayName = 'AmauiIconMaterialCloseFullscreen';

export default IconMaterialCloseFullscreen;
