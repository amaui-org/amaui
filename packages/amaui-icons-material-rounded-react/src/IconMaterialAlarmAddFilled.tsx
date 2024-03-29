import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAddFilled'

      short_name='AlarmAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.275.287-.275.287-.7V14h2q.425 0 .713-.288Q16 13.425 16 13t-.275-.713q-.275-.287-.7-.287H13v-2q0-.425-.287-.713Q12.425 9 12 9t-.712.275q-.288.275-.288.7V12H9q-.425 0-.712.287Q8 12.575 8 13t.275.712q.275.288.7.288H11v2q0 .425.288.712.287.288.712.288Zm0 5q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22ZM3.425 7.325Q3.15 7.6 2.75 7.6t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.875-2.875Q5.2 2.75 5.6 2.75t.7.3q.275.275.275.7 0 .425-.275.7ZM20.55 7.3l-2.875-2.875Q17.4 4.15 17.4 3.75t.3-.7q.275-.275.7-.275.425 0 .7.275l2.875 2.875q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialAlarmAddFilled.displayName = 'AmauiIconMaterialAlarmAddFilled';

export default IconMaterialAlarmAddFilled;
