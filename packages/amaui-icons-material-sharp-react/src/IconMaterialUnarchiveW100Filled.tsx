import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnarchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveW100Filled'

      short_name='Unarchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1l1.6 1.95V19.7ZM5.4 7.3h13.2l-.85-1H6.25Zm6.25 8.95h.7V11.4l2.25 2.25.5-.5-3.1-3.1-3.1 3.1.5.5 2.25-2.25Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveW100Filled.displayName = 'AmauiIconMaterialUnarchiveW100Filled';

export default IconMaterialUnarchiveW100Filled;
