import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100Filled'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M734 810v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T796 892q5-5 5-10t-5-10l-62-62ZM560 336v80q0 13 8.5 21.5T590 446h210v-78q0-12-10-22t-22-10H560Zm160 628q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v245q-23-13-51-19t-54-6q-95 0-162 66.5T492 816v14q0 7 1 14H192Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100Filled.displayName = 'AmauiIconMaterialTabRecentW100Filled';

export default IconMaterialTabRecentW100Filled;
