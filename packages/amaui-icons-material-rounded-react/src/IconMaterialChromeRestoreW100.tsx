import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestoreW100'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M432 684q-26 0-43-17t-17-43V368q0-26 17-43t43-17h256q26 0 43 17t17 43v256q0 26-17 43t-43 17H432Zm0-348q-12 0-22 10t-10 22v256q0 12 10 22t22 10h256q12 0 22-10t10-22V368q0-12-10-22t-22-10H432ZM272 844q-26 0-43-17t-17-43V470q0-6 4-10t10-4q6 0 10 4t4 10v314q0 12 10 22t22 10h314q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm128-508v320-320Z"/>
    </Icon>
  );
});

IconMaterialChromeRestoreW100.displayName = 'AmauiIconMaterialChromeRestoreW100';

export default IconMaterialChromeRestoreW100;
