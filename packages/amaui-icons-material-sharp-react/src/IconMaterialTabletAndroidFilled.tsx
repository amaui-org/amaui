import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroidFilled'

      short_name='TabletAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20h4v-1h-4Zm-7 3V1h18v22Zm2-7h14V6H5Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroidFilled.displayName = 'AmauiIconMaterialTabletAndroidFilled';

export default IconMaterialTabletAndroidFilled;
