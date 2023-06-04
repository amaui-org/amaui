import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 964q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm14-154v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T796 892q5-5 5-10t-5-10l-62-62Zm-542 34h301q-1-7-1-14v-14H192q-12 0-22-10t-10-22V368q0-12 10-22t22-10h368v80q0 13 8.5 21.5T590 446h210v155q8 2 14.5 5t13.5 7V368q0-26-17-43t-43-17H192q-26 0-43 17t-17 43v416q0 26 17 43t43 17Zm-32-60v32-480 448Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100.displayName = 'AmauiIconMaterialTabRecentW100';

export default IconMaterialTabRecentW100;
