import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDone'

      short_name='FileDownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02"/><rect height="2" width="14" x="5" y="18"/></g></g>
    </Icon>
  );
});

IconMaterialFileDownloadDone.displayName = 'AmauiIconMaterialFileDownloadDone';

export default IconMaterialFileDownloadDone;
