import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackFilled'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19H1V5h14Zm2 0V5h2v14Zm4 0V5h2v14ZM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85Z"/>
    </Icon>
  );
});

IconMaterialArtTrackFilled.displayName = 'AmauiIconMaterialArtTrackFilled';

export default IconMaterialArtTrackFilled;
