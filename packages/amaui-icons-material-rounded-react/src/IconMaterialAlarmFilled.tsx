import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmFilled'

      short_name='Alarm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22ZM11 9v3.975q0 .2.075.387.075.188.225.338l2.825 2.825q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7L13 12.6V8.975q0-.425-.287-.7Q12.425 8 12 8t-.712.287Q11 8.575 11 9ZM3.425 7.325Q3.15 7.6 2.75 7.6t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.875-2.875Q5.2 2.75 5.6 2.75t.7.3q.275.275.275.7 0 .425-.275.7ZM20.55 7.3l-2.875-2.875Q17.4 4.15 17.4 3.75t.3-.7q.275-.275.7-.275.425 0 .7.275l2.875 2.875q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialAlarmFilled.displayName = 'AmauiIconMaterialAlarmFilled';

export default IconMaterialAlarmFilled;
