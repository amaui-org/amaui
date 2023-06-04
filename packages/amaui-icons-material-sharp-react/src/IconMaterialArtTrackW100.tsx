import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackW100'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.4 17.7H2V6.3h11.4ZM2.7 17h10V7h-10Zm14.3.7V6.3h.7v11.4Zm4.3 0V6.3h.7v11.4Zm-17-3h6.8l-2-2.7-1.9 2.5-1.4-1.85ZM2.7 7v10Z"/>
    </Icon>
  );
});

IconMaterialArtTrackW100.displayName = 'AmauiIconMaterialArtTrackW100';

export default IconMaterialArtTrackW100;
