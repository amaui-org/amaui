import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCheckW100Filled'

      short_name='PlaylistAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 15.35v-.7h6.7v.7Zm0-4v-.7h10.7v.7Zm0-4v-.7h10.7v.7Zm12.7 10.75-2.65-2.65.5-.5 2.15 2.15 4.25-4.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCheckW100Filled.displayName = 'AmauiIconMaterialPlaylistAddCheckW100Filled';

export default IconMaterialPlaylistAddCheckW100Filled;
