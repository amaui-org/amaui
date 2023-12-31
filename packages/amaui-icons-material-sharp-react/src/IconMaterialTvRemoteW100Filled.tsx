import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvRemoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRemoteW100Filled'

      short_name='TvRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM332-92v-776h296v776H332Zm148-341q-19.583 0-33.292-13.708Q433-460.417 433-480q0-19.583 13.708-33.292Q460.417-527 480-527q19.583 0 33.292 13.708Q527-499.583 527-480q0 19.583-13.708 33.292Q499.583-433 480-433Zm-.035-301q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q469-786 461.5-778.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialTvRemoteW100Filled.displayName = 'AmauiIconMaterialTvRemoteW100Filled';

export default IconMaterialTvRemoteW100Filled;
