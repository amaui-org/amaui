import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRightW100Filled'

      short_name='BorderRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 8.5v-1h1v1Zm8 0v-1h1v1Zm0 4v-1h1v1Zm-8 0v-1h1v1Zm4-8v-1h1v1Zm-4 0v-1h1v1Zm8 0v-1h1v1Zm4 0v-1h1v1Zm-8 8v-1h1v1Zm8 8v-1h1v1Zm-4 0v-1h1v1Zm8.5 0q-.2 0-.35-.15-.15-.15-.15-.35V4q0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363v16q0 .2-.137.35-.138.15-.363.15Zm-12.5 0v-1h1v1Zm-4-4v-1h1v1Zm12-4v-1h1v1Zm-12 8v-1h1v1Zm8-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderRightW100Filled.displayName = 'AmauiIconMaterialBorderRightW100Filled';

export default IconMaterialBorderRightW100Filled;
