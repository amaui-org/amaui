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
      <rect fill="none" height="24" width="24"/><path d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreen.displayName = 'AmauiIconMaterialCloseFullscreen';

export default IconMaterialCloseFullscreen;
