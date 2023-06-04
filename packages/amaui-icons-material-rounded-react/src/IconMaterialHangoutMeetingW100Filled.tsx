import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutMeetingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutMeetingW100Filled'

      short_name='HangoutMeeting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 644h128q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8v-24l64 40V468l-64 40v-24q0-13.6-9.221-22.8-9.221-9.2-22.853-9.2H399.631Q386 452 377 461.221t-9 22.853v128.295Q368 626 377.2 635t22.8 9Zm80 288V820q-58.328 0-110.664-22T277.5 739Q238 702 215 652.708t-23-104.596Q192 488 214.5 435.5q22.5-52.5 61.377-91.636 38.877-39.137 91.381-61.5Q419.762 260 479.881 260 540 260 592.4 282.378q52.4 22.377 91.6 61.538 39.2 39.16 61.6 91.508Q768 487.771 768 547.711 768 658 691.2 760.55 614.4 863.099 480 932Z"/>
    </Icon>
  );
});

IconMaterialHangoutMeetingW100Filled.displayName = 'AmauiIconMaterialHangoutMeetingW100Filled';

export default IconMaterialHangoutMeetingW100Filled;
