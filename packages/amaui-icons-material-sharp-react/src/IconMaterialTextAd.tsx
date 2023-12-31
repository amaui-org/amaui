import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextAd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAd'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm40-40h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h400v-80H200v80Z"/>
    </Icon>
  );
});

IconMaterialTextAd.displayName = 'AmauiIconMaterialTextAd';

export default IconMaterialTextAd;
