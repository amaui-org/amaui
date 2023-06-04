import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerW100Filled'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.3V4.9h17.4v12.4ZM2 19v-.7h20v.7Z"/>
    </Icon>
  );
});

IconMaterialComputerW100Filled.displayName = 'AmauiIconMaterialComputerW100Filled';

export default IconMaterialComputerW100Filled;
