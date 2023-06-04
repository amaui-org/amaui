import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBadW100Filled'

      short_name='SignalWifiBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.075-1.775 4.638-2.738Q9.05 5.3 12 5.3q2.95 0 5.513.962Q20.075 7.225 22.15 9l-3 3H12Zm2.9.45-.5-.5 2.1-2.1-2.1-2.1.5-.5 2.1 2.1 2.1-2.1.5.5-2.1 2.1 2.1 2.1-.5.5-2.1-2.1Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBadW100Filled.displayName = 'AmauiIconMaterialSignalWifiBadW100Filled';

export default IconMaterialSignalWifiBadW100Filled;
