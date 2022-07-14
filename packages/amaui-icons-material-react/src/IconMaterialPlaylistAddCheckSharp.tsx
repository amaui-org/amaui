import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckSharp'
      short_name='PlaylistAddCheck'

      {...props}
    >
      <path d="M3 8V6H15V8ZM3 12V10H15V12ZM3 16V14H11V16ZM16.35 19 12.8 15.45 14.2 14.05 16.35 16.15 20.6 11.9 22 13.35Z"/>
    </Icon>
  );
});

export default IconMaterialPlaylistAddCheckSharp;
