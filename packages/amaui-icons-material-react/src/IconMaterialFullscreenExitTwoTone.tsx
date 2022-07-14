import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenExitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitTwoTone'
      short_name='FullscreenExit'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
    </Icon>
  );
});

export default IconMaterialFullscreenExitTwoTone;
