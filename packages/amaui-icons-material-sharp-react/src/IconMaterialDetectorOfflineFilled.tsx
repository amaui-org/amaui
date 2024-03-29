import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectorOfflineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOfflineFilled'

      short_name='DetectorOffline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 21 8 19.6l2.6-2.6L8 14.4 9.4 13l2.6 2.6 2.6-2.6 1.4 1.4-2.6 2.6 2.6 2.6-1.4 1.4-2.6-2.6Zm-1-12h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363Z"/>
    </Icon>
  );
});

IconMaterialDetectorOfflineFilled.displayName = 'AmauiIconMaterialDetectorOfflineFilled';

export default IconMaterialDetectorOfflineFilled;
