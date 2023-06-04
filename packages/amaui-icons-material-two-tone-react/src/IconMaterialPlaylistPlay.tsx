import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlay'

      short_name='PlaylistPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="11" x="3" y="10"/><rect height="2" width="11" x="3" y="6"/><rect height="2" width="7" x="3" y="14"/><polygon points="16,13 16,21 22,17"/></g></g>
    </Icon>
  );
});

IconMaterialPlaylistPlay.displayName = 'AmauiIconMaterialPlaylistPlay';

export default IconMaterialPlaylistPlay;
