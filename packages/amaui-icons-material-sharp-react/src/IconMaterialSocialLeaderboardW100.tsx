import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialLeaderboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboardW100'

      short_name='SocialLeaderboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q75 0 127.5-52.5T660 716q0-75-52.5-127.5T480 536q-75 0-127.5 52.5T300 716q0 75 52.5 127.5T480 896ZM365 543q19-13 40.5-21t44.5-12l-88-174H262l103 207Zm230 0 104-207H598l-88 174q23 4 44.5 12t40.5 21ZM299 855q6 0 12-.5t12-1.5q-24-28-37.5-63T272 716q0-39 13.5-74t37.5-63q-6-1-12-1.5t-12-.5q-58 0-98.5 40.5T160 716q0 58 40.5 98.5T299 855Zm362 0q58 0 98.5-40.5T800 716q0-58-40.5-98.5T661 577q-6 0-12 .5t-12 1.5q24 28 37.5 63t13.5 74q0 39-13.5 74T637 853q6 1 12 1.5t12 .5Zm-181 69q-38 0-71.5-12T348 877q-11 4-23.5 5.5T299 884q-69 0-118-49t-49-118q0-69 49-118t118-49q11 0 21 1.5t20 3.5L216 308h164l100 200 100-200h164L622 552q9-2 18.5-3t19.5-1q70 0 119 49t49 119q0 70-49 119t-119 49q-13 0-25-1.5t-23-5.5q-27 22-60.5 34.5T480 924Zm0-208ZM365 543 262 336l103 207Zm230 0 104-207-104 207ZM480 816l-31-69-69-31 69-31 31-69 31 69 69 31-69 31-31 69Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardW100.displayName = 'AmauiIconMaterialSocialLeaderboardW100';

export default IconMaterialSocialLeaderboardW100;
