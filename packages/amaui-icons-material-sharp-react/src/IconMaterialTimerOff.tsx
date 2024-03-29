import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOff'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.95 17.15-1.5-1.5q.275-.675.413-1.338Q19 13.65 19 13q0-2.9-2.05-4.95Q14.9 6 12 6q-.6 0-1.275.125-.675.125-1.4.4l-1.5-1.5q.95-.5 2.013-.763Q10.9 4 12 4q1.5 0 2.938.5 1.437.5 2.712 1.45l1.4-1.4 1.4 1.4-1.4 1.4q.95 1.275 1.45 2.712Q21 11.5 21 13q0 1.05-.262 2.087-.263 1.038-.788 2.063ZM13 10.2V8h-2v.2Zm6.8 12.4-2.4-2.4q-1.2.875-2.588 1.338Q13.425 22 12 22q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13q0-1.5.463-2.887Q3.925 8.725 4.8 7.6L1.4 4.2l1.4-1.4 18.4 18.4ZM12 20q1.05 0 2.05-.325 1-.325 1.875-.925L6.2 9.025q-.6.875-.9 1.875-.3 1-.3 2.1 0 2.9 2.05 4.95Q9.1 20 12 20ZM9 3V1h6v2Zm1.9 10.725Zm3-2.625Z"/>
    </Icon>
  );
});

IconMaterialTimerOff.displayName = 'AmauiIconMaterialTimerOff';

export default IconMaterialTimerOff;
