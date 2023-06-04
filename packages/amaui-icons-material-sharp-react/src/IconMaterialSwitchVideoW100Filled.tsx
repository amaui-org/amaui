import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoW100Filled'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.125 14.6.5-.5-1.75-1.75h7.5l-1.75 1.75.5.5 2.6-2.6-2.6-2.6-.5.5 1.75 1.75h-7.5l1.75-1.75-.5-.5-2.6 2.6Zm-4.2 4.1V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoW100Filled.displayName = 'AmauiIconMaterialSwitchVideoW100Filled';

export default IconMaterialSwitchVideoW100Filled;
