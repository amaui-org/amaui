import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutMeetingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutMeetingW100'

      short_name='HangoutMeeting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 644h128q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8v-24l64 40V468l-64 40v-24q0-13.6-9.221-22.8-9.221-9.2-22.853-9.2H399.631Q386 452 377 461.221t-9 22.853v128.295Q368 626 377.2 635t22.8 9Zm80 288V820q-58.328 0-110.664-22T277.5 739Q238 702 215 652.708t-23-104.596Q192 488 214.5 435.5q22.5-52.5 61.377-91.636 38.877-39.137 91.381-61.5Q419.762 260 479.881 260 540 260 592.4 282.4q52.4 22.4 91.6 61.6 39.2 39.2 61.6 91.6Q768 488 768 548q0 110-77 212.5T480 932Zm64-115q76.8-57.664 118.4-127.741Q704 619.181 704 547.903 704 455 638.359 389.5q-65.642-65.5-158.5-65.5Q387 324 321.5 389.6 256 455.2 256 548q0 84 67.2 146T480 756h64v61Zm-64-247Z"/>
    </Icon>
  );
});

IconMaterialHangoutMeetingW100.displayName = 'AmauiIconMaterialHangoutMeetingW100';

export default IconMaterialHangoutMeetingW100;
