import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddSharpFilled'
      short_name='PlaylistAdd'

      {...props}
    >
      <path d="M16 20V16H12V14H16V10H18V14H22V16H18V20ZM3 16V14H10V16ZM3 12V10H14V12ZM3 8V6H14V8Z"/>
    </Icon>
  );
});

export default IconMaterialPlaylistAddSharpFilled;
