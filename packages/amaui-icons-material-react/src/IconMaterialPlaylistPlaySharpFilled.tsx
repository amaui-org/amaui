import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistPlaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistPlaySharpFilled'
      short_name='PlaylistPlay'

      {...props}
    >
      <path d="M2.5 8V6H14.5V8ZM2.5 12V10H14.5V12ZM2.5 16V14H10.5V16ZM15.5 21V13L21.5 17Z"/>
    </Icon>
  );
});

IconMaterialPlaylistPlaySharpFilled.displayName = 'AmauiIconMaterialPlaylistPlaySharpFilled';

export default IconMaterialPlaylistPlaySharpFilled;
