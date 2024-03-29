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
      <path d="M299 936q-91 0-155-64T80 717q0-86 57.5-148.5T281 499L120 176h280l80 160 80-160h280L680 497q85 8 142.5 70.5T880 716q0 92-64 156t-156 64q-9 0-18.5-.5T623 933q55-36 86-93.5T740 716q0-109-75.5-184.5T480 456q-109 0-184.5 75.5T220 716q0 68 28 128t88 89q-9 2-18.5 2.5t-18.5.5Zm181-40q-75 0-127.5-52.5T300 716q0-75 52.5-127.5T480 536q75 0 127.5 52.5T660 716q0 75-52.5 127.5T480 896Zm0-80 31-69 69-31-69-31-31-69-31 69-69 31 69 31 31 69Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardFilled.displayName = 'AmauiIconMaterialSocialLeaderboardFilled';

export default IconMaterialSocialLeaderboardFilled;
