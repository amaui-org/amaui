import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemove'

      short_name='PlaylistRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.4 22 13 20.6l2.6-2.6-2.6-2.6 1.4-1.4 2.6 2.6 2.6-2.6 1.4 1.4-2.6 2.6 2.6 2.6-1.4 1.4-2.6-2.6ZM3 16v-2h7v2Zm0-4v-2h11v2Zm0-4V6h11v2Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemove.displayName = 'AmauiIconMaterialPlaylistRemove';

export default IconMaterialPlaylistRemove;
