import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDone'

      short_name='DownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/>
    </Icon>
  );
});

IconMaterialDownloadDone.displayName = 'AmauiIconMaterialDownloadDone';

export default IconMaterialDownloadDone;
