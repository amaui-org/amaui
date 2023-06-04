import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenW100Filled'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 11V3.3h13.4V11Zm0 9.7V13h13.4v7.7Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenW100Filled.displayName = 'AmauiIconMaterialSplitscreenW100Filled';

export default IconMaterialSplitscreenW100Filled;
