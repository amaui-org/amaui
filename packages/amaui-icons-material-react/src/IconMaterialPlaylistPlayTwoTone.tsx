import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistPlayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayTwoTone'
      short_name='PlaylistPlay'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="11" x="3" y="10"/><rect height="2" width="11" x="3" y="6"/><rect height="2" width="7" x="3" y="14"/><polygon points="16,13 16,21 22,17"/></g></g>
    </Icon>
  );
});

IconMaterialPlaylistPlayTwoTone.displayName = 'AmauiIconMaterialPlaylistPlayTwoTone';

export default IconMaterialPlaylistPlayTwoTone;
