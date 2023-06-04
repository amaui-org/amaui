import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityW100Filled'

      short_name='Priority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19.7q-1.95 0-3.325-1.375Q4.3 16.95 4.3 15V9q0-1.95 1.375-3.325Q7.05 4.3 9 4.3h6q1.95 0 3.325 1.375Q19.7 7.05 19.7 9v6q0 1.95-1.375 3.325Q16.95 19.7 15 19.7Zm2-4.6 5.1-5.1-.5-.5-4.6 4.6-2.2-2.2-.5.5Z"/>
    </Icon>
  );
});

IconMaterialPriorityW100Filled.displayName = 'AmauiIconMaterialPriorityW100Filled';

export default IconMaterialPriorityW100Filled;
