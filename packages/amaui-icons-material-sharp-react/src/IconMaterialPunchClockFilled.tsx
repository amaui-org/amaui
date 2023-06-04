import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockFilled'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V6h3V1h12v5h3v16ZM8 6h8V3H8Zm4 12.2q1.725 0 2.963-1.238Q16.2 15.725 16.2 14t-1.237-2.963Q13.725 9.8 12 9.8t-2.962 1.237Q7.8 12.275 7.8 14t1.238 2.962Q10.275 18.2 12 18.2Zm1.15-2.35L11.5 14.2v-2.7h1v2.3l1.35 1.35Z"/>
    </Icon>
  );
});

IconMaterialPunchClockFilled.displayName = 'AmauiIconMaterialPunchClockFilled';

export default IconMaterialPunchClockFilled;
