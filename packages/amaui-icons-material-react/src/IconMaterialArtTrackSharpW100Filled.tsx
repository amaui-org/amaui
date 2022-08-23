import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArtTrackSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackSharpW100Filled'
      short_name='ArtTrack'

      {...props}
    >
      <path d="M13.4 17.7H2V6.3H13.4ZM17 17.7V6.3H17.7V17.7ZM21.3 17.7V6.3H22V17.7ZM4.3 14.7H11.1L9.1 12L7.2 14.5L5.8 12.65Z"/>
    </Icon>
  );
});

IconMaterialArtTrackSharpW100Filled.displayName = 'AmauiIconMaterialArtTrackSharpW100Filled';

export default IconMaterialArtTrackSharpW100Filled;
