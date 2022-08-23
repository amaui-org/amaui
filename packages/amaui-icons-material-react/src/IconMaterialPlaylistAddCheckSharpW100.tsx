import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckSharpW100'
      short_name='PlaylistAddCheck'

      {...props}
    >
      <path d="M3.65 7.35V6.65H14.35V7.35ZM3.65 11.35V10.65H14.35V11.35ZM3.65 15.35V14.65H10.35V15.35ZM16.35 18.1 13.7 15.45 14.2 14.95 16.35 17.1 20.6 12.85 21.1 13.35Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckSharpW100.displayName = 'AmauiIconMaterialPlaylistAddCheckSharpW100';

export default IconMaterialPlaylistAddCheckSharpW100;
