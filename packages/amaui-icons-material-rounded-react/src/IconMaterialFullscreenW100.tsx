import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenW100'

      short_name='Fullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 19q-.325 0-.537-.212Q5 18.575 5 18.25v-3.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.95h3.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.4-9q-.15 0-.25-.1T5 9.65v-3.9q0-.325.213-.537Q5.425 5 5.75 5h3.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.7v3.95q0 .15-.1.25t-.25.1Zm9 9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.95v-3.95q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.9q0 .325-.212.538-.213.212-.538.212Zm4.3-9q-.15 0-.25-.1t-.1-.25V5.7h-3.95q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.9q.325 0 .538.213.212.212.212.537v3.9q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFullscreenW100.displayName = 'AmauiIconMaterialFullscreenW100';

export default IconMaterialFullscreenW100;
