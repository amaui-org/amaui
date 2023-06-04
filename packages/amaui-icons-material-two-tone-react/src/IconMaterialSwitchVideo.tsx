import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideo'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17h12V7H4v10zm4-8v2h4V9l3 3-3 3v-2H8v2l-3-3 3-3z" opacity=".3"/><path d="M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zM16 17H4V7h12v10z"/>
    </Icon>
  );
});

IconMaterialSwitchVideo.displayName = 'AmauiIconMaterialSwitchVideo';

export default IconMaterialSwitchVideo;
