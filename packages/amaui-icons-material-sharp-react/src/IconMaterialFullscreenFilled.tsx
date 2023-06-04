import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenFilled'

      short_name='Fullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19v-5h2v3h3v2Zm0-9V5h5v2H7v3Zm9 9v-2h3v-3h2v5Zm3-9V7h-3V5h5v5Z"/>
    </Icon>
  );
});

IconMaterialFullscreenFilled.displayName = 'AmauiIconMaterialFullscreenFilled';

export default IconMaterialFullscreenFilled;
