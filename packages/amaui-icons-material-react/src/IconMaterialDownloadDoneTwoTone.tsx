import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadDoneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadDoneTwoTone'
      short_name='DownloadDone'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/>
    </Icon>
  )
});

export default IconMaterialDownloadDoneTwoTone;
