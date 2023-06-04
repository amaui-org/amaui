import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestoreW100Filled'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M432.332 684Q406 684 389 667t-17-43.332V368.332Q372 342 389 325t43.332-17h255.336Q714 308 731 325t17 43.332v255.336Q748 650 731 667t-43.332 17H432.332ZM272 844q-26 0-43-17t-17-43V470q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v314q0 12 10 22t22 10h314q5.95 0 9.975 4.035 4.025 4.035 4.025 10T595.975 840q-4.025 4-9.975 4H272Z"/>
    </Icon>
  );
});

IconMaterialChromeRestoreW100Filled.displayName = 'AmauiIconMaterialChromeRestoreW100Filled';

export default IconMaterialChromeRestoreW100Filled;
