import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArtTrackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackSharp'
      short_name='ArtTrack'

      {...props}
    >
      <path d="M15 19H1V5H15ZM3 17H13V7H3ZM17 19V5H19V19ZM21 19V5H23V19ZM4 15H12L9.4 11.5L7.5 14L6.1 12.15ZM3 7V17Z"/>
    </Icon>
  );
});

export default IconMaterialArtTrackSharp;
