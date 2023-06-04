import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckFilled'

      short_name='PlaylistAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 16v-2h8v2Zm0-4v-2h12v2Zm0-4V6h12v2Zm13.35 11-3.55-3.55 1.4-1.4 2.15 2.1 4.25-4.25 1.4 1.45Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckFilled.displayName = 'AmauiIconMaterialPlaylistAddCheckFilled';

export default IconMaterialPlaylistAddCheckFilled;
