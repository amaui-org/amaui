import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonMicFilled'

      short_name='FramePersonMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-51 0-85.5-34.5T320-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T440-480Zm200 240v-62q-43-8-71.5-40.5T540-420h40q0 33 23.5 56.5T660-340q33 0 56.5-23.5T740-420h40q0 45-28.5 77.5T680-302v62h-40Zm20-140q-21 0-35.5-14.5T610-430v-80q0-21 14.5-35.5T660-560q21 0 35.5 14.5T710-510v80q0 21-14.5 35.5T660-380ZM80-80v-240h80v160h160v80H80Zm0-560v-240h240v80H160v160H80ZM640-80v-80h160v-160h80v240H640Zm160-560v-160H640v-80h240v240h-80ZM200-240v-76q0-21 10.5-39.5T239-385q51-30 108-44t117-10q-2 10-3 19.5t-1 19.5q0 48 21 89.5t59 70.5H200Z"/>
    </Icon>
  );
});

IconMaterialFramePersonMicFilled.displayName = 'AmauiIconMaterialFramePersonMicFilled';

export default IconMaterialFramePersonMicFilled;
