import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMinimizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMinimizeW100Filled'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 844v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialChromeMinimizeW100Filled.displayName = 'AmauiIconMaterialChromeMinimizeW100Filled';

export default IconMaterialChromeMinimizeW100Filled;
