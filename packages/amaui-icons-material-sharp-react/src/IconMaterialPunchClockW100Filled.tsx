import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100Filled'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35V6.65h3v-5h10.7v5h3v14.7Zm3.7-14.7h9.3v-4.3h-9.3ZM12 18.475q1.875 0 3.175-1.3 1.3-1.3 1.3-3.175 0-1.875-1.3-3.175-1.3-1.3-3.175-1.3-1.875 0-3.175 1.3-1.3 1.3-1.3 3.175 0 1.875 1.3 3.175 1.3 1.3 3.175 1.3Zm1.15-2.825-1.5-1.5v-2.5h.7v2.2l1.3 1.3Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100Filled.displayName = 'AmauiIconMaterialPunchClockW100Filled';

export default IconMaterialPunchClockW100Filled;
