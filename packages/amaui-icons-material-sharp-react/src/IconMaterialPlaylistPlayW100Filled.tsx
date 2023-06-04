import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayW100Filled'

      short_name='PlaylistPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 15.35v-.7h6.7v.7Zm0-4v-.7h10.7v.7Zm0-4v-.7h10.7v.7Zm12.5 12.45v-5.6l4.2 2.8Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayW100Filled.displayName = 'AmauiIconMaterialPlaylistPlayW100Filled';

export default IconMaterialPlaylistPlayW100Filled;
