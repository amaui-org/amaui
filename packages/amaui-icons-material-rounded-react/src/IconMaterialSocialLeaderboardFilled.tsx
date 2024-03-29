import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialLeaderboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboardFilled'

      short_name='SocialLeaderboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M299 936q-91 0-155-64T80 717q0-86 57.5-148.5T281 499L149 234q-10-20 1.5-39t34.5-19h166q23 0 41.5 12t29.5 32l58 116 58-116q11-20 29.5-32t41.5-12h166q23 0 34.5 19t1.5 39L680 497q85 8 142.5 70.5T880 716q0 92-64 156t-156 64q-9 0-18.5-.5T623 933q55-36 86-93.5T740 716q0-109-75.5-184.5T480 456q-109 0-184.5 75.5T220 716q0 68 28 128t88 89q-9 2-18.5 2.5t-18.5.5Zm181-40q-75 0-127.5-52.5T300 716q0-75 52.5-127.5T480 536q75 0 127.5 52.5T660 716q0 75-52.5 127.5T480 896Zm-31-149 22 49q3 6 9 6t9-6l22-49 49-22q6-3 6-9t-6-9l-49-22-22-49q-3-6-9-6t-9 6l-22 49-49 22q-6 3-6 9t6 9l49 22Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardFilled.displayName = 'AmauiIconMaterialSocialLeaderboardFilled';

export default IconMaterialSocialLeaderboardFilled;
