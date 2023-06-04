import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmSmartWakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmSmartWakeW100'

      short_name='AlarmSmartWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M332.965 642q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q322 590 314.5 597.465t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Zm147 0q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q469 590 461.5 597.465t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Zm147 0q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q616 590 608.5 597.465t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5ZM480.057 924Q416 924 360 900t-98-66q-42-42-66-97.943t-24-120Q172 552 196 496t66-98q42-42 97.943-66t120-24Q544 308 600 332t98 66q42 42 66 97.943t24 120Q788 680 764 736t-66 98q-42 42-97.943 66t-120 24ZM480 616ZM240 246l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20ZM480 896q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
    </Icon>
  );
});

IconMaterialAlarmSmartWakeW100.displayName = 'AmauiIconMaterialAlarmSmartWakeW100';

export default IconMaterialAlarmSmartWakeW100;
