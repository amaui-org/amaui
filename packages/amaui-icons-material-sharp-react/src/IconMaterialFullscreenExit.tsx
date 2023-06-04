import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenExit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExit'

      short_name='FullscreenExit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19v-3H5v-2h5v5Zm-3-9V8h3V5h2v5Zm9 9v-5h5v2h-3v3Zm0-9V5h2v3h3v2Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExit.displayName = 'AmauiIconMaterialFullscreenExit';

export default IconMaterialFullscreenExit;
