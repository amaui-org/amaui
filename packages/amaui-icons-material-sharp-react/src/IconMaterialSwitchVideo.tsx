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
      <path d="m7.5 15.5 1.4-1.4L7.8 13h4.4l-1.1 1.1 1.4 1.4L16 12l-3.5-3.5-1.4 1.4 1.1 1.1H7.8l1.1-1.1-1.4-1.4L4 12ZM2 20V4h16v6.5l4-4v11l-4-4V20Zm2-2h12V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideo.displayName = 'AmauiIconMaterialSwitchVideo';

export default IconMaterialSwitchVideo;
