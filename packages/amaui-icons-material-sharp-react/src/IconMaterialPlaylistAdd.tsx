import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAdd'

      short_name='PlaylistAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 16v-2h7v2Zm0-4v-2h11v2Zm0-4V6h11v2Zm13 12v-4h-4v-2h4v-4h2v4h4v2h-4v4Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAdd.displayName = 'AmauiIconMaterialPlaylistAdd';

export default IconMaterialPlaylistAdd;
