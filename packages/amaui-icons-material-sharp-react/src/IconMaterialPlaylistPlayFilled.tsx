import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlayFilled'

      short_name='PlaylistPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.5 16v-2h8v2Zm0-4v-2h12v2Zm0-4V6h12v2Zm13 13v-8l6 4Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlayFilled.displayName = 'AmauiIconMaterialPlaylistPlayFilled';

export default IconMaterialPlaylistPlayFilled;
