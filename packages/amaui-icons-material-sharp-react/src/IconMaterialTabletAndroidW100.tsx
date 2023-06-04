import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidW100'

      short_name='TabletAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.55h3.4v-.7h-3.4Zm-6 2.15V2.3h15.4v19.4Zm.7-5h14V5.35H5ZM5 21h14v-3.6H5ZM5 4.65h14V3H5Zm0 0V3v1.65ZM5 21v-3.6V21Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidW100.displayName = 'AmauiIconMaterialTabletAndroidW100';

export default IconMaterialTabletAndroidW100;
