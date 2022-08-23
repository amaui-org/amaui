import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadDoneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDoneSharp'
      short_name='FileDownloadDone'

      {...props}
    >
      <path d="M5 20V18H19V20ZM9.55 16 3.875 10.325 5.3 8.9 9.55 13.15 18.7 4 20.125 5.425Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDoneSharp.displayName = 'AmauiIconMaterialFileDownloadDoneSharp';

export default IconMaterialFileDownloadDoneSharp;
