import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRightW100Filled'

      short_name='ForkRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 20.35V5.275L7.4 7.525l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v9.875q.8-1.35 2.013-2.025 1.212-.675 2.737-.675.725 0 1.375.05t1.25.15l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25q-.6-.1-1.287-.162-.688-.063-1.338-.063-1.55 0-2.887.937Q10.875 15 10.35 16.9v3.45Z"/>
    </Icon>
  );
});

IconMaterialForkRightW100Filled.displayName = 'AmauiIconMaterialForkRightW100Filled';

export default IconMaterialForkRightW100Filled;
