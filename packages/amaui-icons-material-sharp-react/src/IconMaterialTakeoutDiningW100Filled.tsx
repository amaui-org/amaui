import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100Filled'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.275 10.4 2.9 7.2l.425-.55L6.45 9.6 6.3 7.55 9.55 4.3h4.9l3.25 3.25-.15 2.05 3.125-2.95.425.55-3.375 3.2Zm.875 8.3-.575-7.6h10.85l-.575 7.6Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100Filled.displayName = 'AmauiIconMaterialTakeoutDiningW100Filled';

export default IconMaterialTakeoutDiningW100Filled;
