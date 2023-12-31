import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextAdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAdFilled'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm120-120h560v-80H200v80Zm0-160h560v-80H200v80Zm0-160h400v-80H200v80Z"/>
    </Icon>
  );
});

IconMaterialTextAdFilled.displayName = 'AmauiIconMaterialTextAdFilled';

export default IconMaterialTextAdFilled;
