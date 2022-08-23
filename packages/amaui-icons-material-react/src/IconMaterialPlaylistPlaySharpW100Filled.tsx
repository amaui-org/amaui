import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistPlaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlaySharpW100Filled'
      short_name='PlaylistPlay'

      {...props}
    >
      <path d="M3.65 7.35V6.65H14.35V7.35ZM3.65 11.35V10.65H14.35V11.35ZM3.65 15.35V14.65H10.35V15.35ZM16.15 19.8V14.2L20.35 17Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlaySharpW100Filled.displayName = 'AmauiIconMaterialPlaylistPlaySharpW100Filled';

export default IconMaterialPlaylistPlaySharpW100Filled;
