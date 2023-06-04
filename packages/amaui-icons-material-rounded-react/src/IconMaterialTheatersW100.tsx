import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheatersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersW100'

      short_name='Theaters'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20.35q-.15 0-.25-.1t-.1-.25V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4.4q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v1.25h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v16q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.65h-3.3v1.25q0 .325-.212.538-.213.212-.538.212H9.4q-.325 0-.537-.212-.213-.213-.213-.538v-1.25h-3.3V20q0 .15-.1.25t-.25.1Zm.35-2.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm10 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm-6 10h5.3V4.35h-5.3Zm0-15.3h5.3Z"/>
    </Icon>
  );
});

IconMaterialTheatersW100.displayName = 'AmauiIconMaterialTheatersW100';

export default IconMaterialTheatersW100;
