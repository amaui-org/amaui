import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRobot2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot2W100Filled'

      short_name='Robot2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-210h536v210H212Zm163-290q-67.645 0-115.323-47.677Q212-557.355 212-625t47.677-115.323Q307.355-788 375-788h210q67.645 0 115.323 47.677Q748-692.645 748-625t-47.677 115.323Q652.645-462 585-462H375Zm-.035-137q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q364-651 356.5-643.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Zm210 0q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q574-651 566.5-643.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialRobot2W100Filled.displayName = 'AmauiIconMaterialRobot2W100Filled';

export default IconMaterialRobot2W100Filled;
