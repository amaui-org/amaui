import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVapingRooms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapingRooms'

      short_name='VapingRooms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19q-.975-.25-1.987-.375Q4 18.5 3 18.5H2v-2h1q1 0 2.013-.125Q6.025 16.25 7 16Zm1 0v-3h14v3Zm2.5-1q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm7.5-3v-1.3q0-.975-.575-1.488-.575-.512-1.375-.512H14.5q-1.4 0-2.375-.975-.975-.975-.975-2.375t.975-2.375Q13.1 5 14.5 5v1.5q-.75 0-1.3.525t-.55 1.325q0 .8.55 1.325.55.525 1.3.525h1.55q1.4 0 2.425.9t1.025 2.25V15Zm2.5 0v-2.25q0-1.65-1.15-2.85-1.15-1.2-2.85-1.2V7.2q.75 0 1.3-.55t.55-1.3q0-.75-.55-1.3t-1.3-.55V2q1.4 0 2.375.975.975.975.975 2.375 0 .725-.275 1.312-.275.588-.725 1.088 1.4.65 2.275 2t.875 3V15Z"/>
    </Icon>
  );
});

IconMaterialVapingRooms.displayName = 'AmauiIconMaterialVapingRooms';

export default IconMaterialVapingRooms;
