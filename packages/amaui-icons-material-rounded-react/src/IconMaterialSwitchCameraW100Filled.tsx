import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraW100Filled'

      short_name='SwitchCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.325 13.575 9.65 15.9q.125.125.25.125t.25-.125q.125-.125.125-.25t-.125-.25l-2-2h7.7l-2 2q-.125.125-.125.25t.125.25q.125.125.25.125t.25-.125l2.325-2.325q.225-.225.225-.525 0-.3-.225-.525L14.35 10.2q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l2 2h-7.7l2-2q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-2.325 2.325q-.225.225-.225.525 0 .3.225.525ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraW100Filled.displayName = 'AmauiIconMaterialSwitchCameraW100Filled';

export default IconMaterialSwitchCameraW100Filled;
