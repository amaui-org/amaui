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
      <path d="M242-172q-12.75 0-21.375-8.637Q212-189.275 212-202.043v-120.172Q212-347 229.625-364.5 247.25-382 272-382h416q24.75 0 42.375 17.648T748-321.922v120.155q0 12.767-8.625 21.267T718-172H242Zm133-290q-67.645 0-115.323-47.677Q212-557.355 212-625t47.677-115.323Q307.355-788 375-788h210q67.645 0 115.323 47.677Q748-692.645 748-625t-47.677 115.323Q652.645-462 585-462H375Zm-.035-137q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q364-651 356.5-643.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Zm210 0q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Q574-651 566.5-643.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialRobot2W100Filled.displayName = 'AmauiIconMaterialRobot2W100Filled';

export default IconMaterialRobot2W100Filled;
