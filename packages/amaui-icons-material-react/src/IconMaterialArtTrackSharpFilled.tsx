import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArtTrackSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackSharpFilled'
      short_name='ArtTrack'

      {...props}
    >
      <path d="M15 19H1V5H15ZM17 19V5H19V19ZM21 19V5H23V19ZM4 15H12L9.4 11.5L7.5 14L6.1 12.15Z"/>
    </Icon>
  )
});

export default IconMaterialArtTrackSharpFilled;
