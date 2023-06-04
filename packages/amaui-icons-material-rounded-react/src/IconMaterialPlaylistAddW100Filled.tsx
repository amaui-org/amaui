import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddW100Filled'

      short_name='PlaylistAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 19.35q-.15 0-.25-.1t-.1-.25v-3.65H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.65V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.65V19q0 .15-.1.25t-.25.1Zm-13-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h10.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddW100Filled.displayName = 'AmauiIconMaterialPlaylistAddW100Filled';

export default IconMaterialPlaylistAddW100Filled;
