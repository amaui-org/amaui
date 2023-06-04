import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoW100'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.125 14.6.5-.5-1.75-1.75h7.5l-1.75 1.75.5.5 2.6-2.6-2.6-2.6-.5.5 1.75 1.75h-7.5l1.75-1.75-.5-.5-2.6 2.6Zm-4.2 4.1V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoW100.displayName = 'AmauiIconMaterialSwitchVideoW100';

export default IconMaterialSwitchVideoW100;
