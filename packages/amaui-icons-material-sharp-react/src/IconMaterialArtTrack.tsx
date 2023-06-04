import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrack'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19H1V5h14ZM3 17h10V7H3Zm14 2V5h2v14Zm4 0V5h2v14ZM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85ZM3 7v10Z"/>
    </Icon>
  );
});

IconMaterialArtTrack.displayName = 'AmauiIconMaterialArtTrack';

export default IconMaterialArtTrack;
