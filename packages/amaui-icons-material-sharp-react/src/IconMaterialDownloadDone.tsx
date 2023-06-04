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
      <path d="M5 20v-2h14v2Zm4.55-4-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425Z"/>
    </Icon>
  );
});

IconMaterialDownloadDone.displayName = 'AmauiIconMaterialDownloadDone';

export default IconMaterialDownloadDone;
