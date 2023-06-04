import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoMeetingRoomW100'

      short_name='AutoMeetingRoom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M222 856V328q0-24.75 17.625-42.375T282 268h196q17 0 28.5 11.5T518 308h48q24.75 0 42.375 17.625T626 368v244q0 5.95-4.035 9.975-4.035 4.025-10 4.025T602 621.975q-4-4.025-4-9.975V368q0-14-9-23t-23-9h-48v518q0 12.75-8.625 21.375T488 884H156q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h66Zm188-252q11 0 19.5-8.5T438 576q0-11-8.5-19.5T410 548q-11 0-19.5 8.5T382 576q0 11 8.5 19.5T410 604ZM250 856h240V328q0-14-9-23t-23-9H282q-14 0-23 9t-9 23v528Zm424-6 20 45q3.871 9 13.935 9Q718 904 722 895l20-45 45-20q9-3.871 9-13.935Q796 806 787 802l-45-20-20-45q-3.871-9-13.935-9Q698 728 694 737l-20 45-45 20q-9 3.871-9 13.935Q620 826 629 830l45 20Zm-424 6V296v560Z"/>
    </Icon>
  );
});

IconMaterialAutoMeetingRoomW100.displayName = 'AmauiIconMaterialAutoMeetingRoomW100';

export default IconMaterialAutoMeetingRoomW100;
