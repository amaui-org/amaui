import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialLeaderboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboardW100Filled'

      short_name='SocialLeaderboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M299 884q-69 0-118-49t-49-118q0-69 49-118t118-49q10 0 20 1.5t20 3.5L216 308h164l100 200 100-200h164L622 552q9-2 18.5-3t19.5-1q70 0 119 49t49 119q0 70-49 119t-119 49q-12 0-24.5-1.5T612 877q45-16 60.5-63t15.5-98q0-87-60.5-147.5T480 508q-87 0-147.5 60.5T272 716q0 51 14.5 99t61.5 62q-12 4-24 5.5t-25 1.5Zm181 12q-75 0-127.5-52.5T300 716q0-75 52.5-127.5T480 536q75 0 127.5 52.5T660 716q0 75-52.5 127.5T480 896Zm0-80 31-69 69-31-69-31-31-69-31 69-69 31 69 31 31 69Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardW100Filled.displayName = 'AmauiIconMaterialSocialLeaderboardW100Filled';

export default IconMaterialSocialLeaderboardW100Filled;
