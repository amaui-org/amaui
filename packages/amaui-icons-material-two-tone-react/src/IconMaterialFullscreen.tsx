import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fullscreen'

      short_name='Fullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
    </Icon>
  );
});

IconMaterialFullscreen.displayName = 'AmauiIconMaterialFullscreen';

export default IconMaterialFullscreen;
