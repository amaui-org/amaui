import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenExitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitW100'

      short_name='FullscreenExit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19q-.15 0-.25-.1t-.1-.25V14.7H5.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.9q.325 0 .538.212.212.213.212.538v3.9q0 .15-.1.25t-.25.1Zm-4.3-9q-.15 0-.25-.1T5 9.65q0-.15.1-.25t.25-.1H9.3V5.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.9q0 .325-.212.537Q9.575 10 9.25 10Zm9 9q-.15 0-.25-.1t-.1-.25v-3.9q0-.325.213-.538.212-.212.537-.212h3.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H14.7v3.95q0 .15-.1.25t-.25.1Zm.4-9q-.325 0-.537-.213Q14 9.575 14 9.25v-3.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V9.3h3.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitW100.displayName = 'AmauiIconMaterialFullscreenExitW100';

export default IconMaterialFullscreenExitW100;
