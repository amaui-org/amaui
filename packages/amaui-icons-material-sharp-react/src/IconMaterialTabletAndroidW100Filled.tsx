import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidW100Filled'

      short_name='TabletAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.55h3.4v-.7h-3.4Zm-6 2.15V2.3h15.4v19.4Zm.7-5h14V5.35H5Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidW100Filled.displayName = 'AmauiIconMaterialTabletAndroidW100Filled';

export default IconMaterialTabletAndroidW100Filled;
