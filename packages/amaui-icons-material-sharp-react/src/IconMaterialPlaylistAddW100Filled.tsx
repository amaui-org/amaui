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
      <path d="M3.65 15.35v-.7h7v.7Zm0-4v-.7h11v.7Zm0-4v-.7h11v.7Zm13 12v-4h-4v-.7h4v-4h.7v4h4v.7h-4v4Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddW100Filled.displayName = 'AmauiIconMaterialPlaylistAddW100Filled';

export default IconMaterialPlaylistAddW100Filled;
