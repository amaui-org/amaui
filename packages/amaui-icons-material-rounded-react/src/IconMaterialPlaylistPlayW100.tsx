import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayW100'

      short_name='PlaylistPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 7.35q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12.7 4.075q-.175.125-.362.025-.188-.1-.188-.3v-4.3q0-.2.188-.3.187-.1.362.025l3.225 2.125q.175.1.175.3 0 .2-.175.3Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayW100.displayName = 'AmauiIconMaterialPlaylistPlayW100';

export default IconMaterialPlaylistPlayW100;
