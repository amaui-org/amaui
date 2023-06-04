import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMaximizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximizeW100Filled'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H272Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximizeW100Filled.displayName = 'AmauiIconMaterialChromeMaximizeW100Filled';

export default IconMaterialChromeMaximizeW100Filled;
