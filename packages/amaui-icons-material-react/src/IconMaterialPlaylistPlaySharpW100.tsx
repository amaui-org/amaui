import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistPlaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlaySharpW100'
      short_name='PlaylistPlay'

      {...props}
    >
      <path d="M3.65 7.35V6.65H14.35V7.35ZM3.65 11.35V10.65H14.35V11.35ZM3.65 15.35V14.65H10.35V15.35ZM16.15 19.8V14.2L20.35 17Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlaySharpW100.displayName = 'AmauiIconMaterialPlaylistPlaySharpW100';

export default IconMaterialPlaylistPlaySharpW100;
