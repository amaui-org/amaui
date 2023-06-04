import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMaximizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMaximizeW100'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22V368q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialChromeMaximizeW100.displayName = 'AmauiIconMaterialChromeMaximizeW100';

export default IconMaterialChromeMaximizeW100;
