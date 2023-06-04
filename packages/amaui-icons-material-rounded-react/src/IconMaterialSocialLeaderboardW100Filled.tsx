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
      <path d="M299 884q-69.393 0-118.196-48.804Q132 786.393 132 717q0-69 49-118t118-49q10 0 20 1.5t20 3.5L237.676 351.368Q230 336 238.5 322q8.5-14 25.5-14h79q17.493 0 31.563 9 14.071 9 22.437 24l83 167 83-167q8.366-15 22.437-24 14.07-9 31.563-9h78q17.5 0 26.25 14t1.09 29.265L622 552q9-2 18.5-3t19.5-1q70 0 119 49t49 119q0 70.255-48.873 119.127Q730.255 884 660 884q-11.893 0-24.446-1.5Q623 881 612 877q45-16 60.5-62.885Q688 767.231 688 716q0-87.2-60.359-147.6-60.359-60.4-147.5-60.4Q393 508 332.5 568.4 272 628.8 272 716q0 51 14.5 99t61.5 62q-12 4-24 5.5t-25 1.5Zm181 12q-75 0-127.5-52.5T300 716q0-75 52.5-127.5T480 536q75 0 127.5 52.5T660 716q0 75-52.5 127.5T480 896Zm-31.169-148.831L473 801q2.4 5 7.2 5 4.8 0 6.8-5l24.169-53.831L565 723q5-2.4 5-7.2 0-4.8-5-6.8l-53.831-24.169L487 631q-2.4-5-7.2-5-4.8 0-6.8 5l-24.169 53.831L395 709q-5 2.4-5 7.2 0 4.8 5 6.8l53.831 24.169Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardW100Filled.displayName = 'AmauiIconMaterialSocialLeaderboardW100Filled';

export default IconMaterialSocialLeaderboardW100Filled;
