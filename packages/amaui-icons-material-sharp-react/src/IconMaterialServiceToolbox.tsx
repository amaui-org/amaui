import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialServiceToolbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolbox'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-720v-120h400v120h79l121 278v282H80v-282l121-278h79Zm80 0h240v-40H360v40Zm-80 240v-40h80v40h240v-40h80v40h96l-68-160H252l-68 160h96Zm0 80H160v160h640v-160H680v40h-80v-40H360v40h-80v-40Zm200-40Zm0-40Zm0 80Z"/>
    </Icon>
  );
});

IconMaterialServiceToolbox.displayName = 'AmauiIconMaterialServiceToolbox';

export default IconMaterialServiceToolbox;
