import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairFilled'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13v-2q0-1.275-.75-2.338Q5.5 7.6 4 7.375V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v1.375q-1.5.375-2.25 1.363Q17 9.725 17 11v2Zm-2 8q-.425 0-.713-.288Q4 20.425 4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-.875.562-1.438Q2.125 9 3 9t1.438.562Q5 10.125 5 11v4h14v-4q0-.875.562-1.438Q20.125 9 21 9t1.438.562Q23 10.125 23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.712Q19.425 21 19 21t-.712-.288Q18 20.425 18 20v-1H6v1q0 .425-.287.712Q5.425 21 5 21Z"/>
    </Icon>
  );
});

IconMaterialChairFilled.displayName = 'AmauiIconMaterialChairFilled';

export default IconMaterialChairFilled;
