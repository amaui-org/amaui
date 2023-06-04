import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckW100'

      short_name='PlaylistAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 7.35q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12.1 2.5-2.15-2.15q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l1.9 1.9 4-4q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-4.25 4.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckW100.displayName = 'AmauiIconMaterialPlaylistAddCheckW100';

export default IconMaterialPlaylistAddCheckW100;
