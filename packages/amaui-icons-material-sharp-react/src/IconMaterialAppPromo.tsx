import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppPromo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppPromo'

      short_name='AppPromo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520 480-360 320-520l56-56 64 62v-166h80v166l64-62 56 56ZM400-160h160v-40H400v40ZM200-40v-880h560v880H200Zm80-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
    </Icon>
  );
});

IconMaterialAppPromo.displayName = 'AmauiIconMaterialAppPromo';

export default IconMaterialAppPromo;
