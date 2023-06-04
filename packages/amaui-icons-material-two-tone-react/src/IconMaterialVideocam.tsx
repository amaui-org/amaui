import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocam = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Videocam'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h10v8H5z" opacity=".3"/><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"/>
    </Icon>
  );
});

IconMaterialVideocam.displayName = 'AmauiIconMaterialVideocam';

export default IconMaterialVideocam;
