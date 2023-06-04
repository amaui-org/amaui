import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDown'

      short_name='VolumeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 13h2.83L12 15.17V8.83L9.83 11H7z" opacity=".3"/><path d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/>
    </Icon>
  );
});

IconMaterialVolumeDown.displayName = 'AmauiIconMaterialVolumeDown';

export default IconMaterialVolumeDown;
