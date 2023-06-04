import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScoreW100Filled'

      short_name='SleepScore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M820 475q-6 0-10-4.5t-5-11.5q-3-41-19-76t-42-63l-16 28q-10 16-21 35.5T683 417q-8 8-18.5 8t-18.5-8q-8-8-8-18.5t8-18.5q13-14 33-24.5t36-20.5l28-17q-29-30-67-48.5T593 249q-6 0-9.5-4t-3.5-10q0-6 5-10.5t11-3.5q95 6 162 72t75 161q1 8-2.5 14.5T820 475ZM483 924q-73 0-137-27.5T234 821q-48-48-75.5-112T131 572q0-100 52-184.5T324 258q5-2 9.5-2t8.5 2q4 2 6.5 6.5T351 275q5 85 38.5 161T483 572q60 60 136 93.5T780 704q6 0 10.5 2.5t6.5 6.5q2 4 2 8.5t-2 9.5q-45 89-129.5 141T483 924Z"/>
    </Icon>
  );
});

IconMaterialSleepScoreW100Filled.displayName = 'AmauiIconMaterialSleepScoreW100Filled';

export default IconMaterialSleepScoreW100Filled;
