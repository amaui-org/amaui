import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepW100Filled'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 924q-73 0-137-27.5T234 821q-48-48-75.5-112T131 572q0-100 52-184.5T324 258q5-2 9.5-2t8.5 2q4 2 6.5 6.5T351 275q5 85 38.5 161T483 572q60 60 136 93.5T780 704q6 0 10.5 2.5t6.5 6.5q2 4 2 8.5t-2 9.5q-45 89-129.5 141T483 924Zm183-578-52-23q-5-2-5-7t5-7l52-23 23-52q2-5 7-5t7 5l23 52 52 23q5 2 5 7t-5 7l-52 23-23 52q-2 5-7 5t-7-5l-23-52Z"/>
    </Icon>
  );
});

IconMaterialSleepW100Filled.displayName = 'AmauiIconMaterialSleepW100Filled';

export default IconMaterialSleepW100Filled;
