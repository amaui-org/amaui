import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadW100Filled'

      short_name='CloudDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.1 1.738-3.475Q9.575 5.45 11.65 5.3v8.4l-2.2-2.2-.5.5L12 15.05 15.05 12l-.5-.5-2.2 2.2V5.3q2.25.25 3.8 1.838Q17.7 8.725 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadW100Filled.displayName = 'AmauiIconMaterialCloudDownloadW100Filled';

export default IconMaterialCloudDownloadW100Filled;
