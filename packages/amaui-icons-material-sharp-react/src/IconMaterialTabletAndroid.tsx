import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletAndroid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroid'

      short_name='TabletAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20h4v-1h-4Zm-7 3V1h18v22Zm2-7h14V6H5Zm0 5h14v-3H5ZM5 4h14V3H5Zm0 0V3v1Zm0 17v-3 3Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroid.displayName = 'AmauiIconMaterialTabletAndroid';

export default IconMaterialTabletAndroid;
