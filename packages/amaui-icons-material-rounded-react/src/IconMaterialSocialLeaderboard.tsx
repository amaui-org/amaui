import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialLeaderboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboard'

      short_name='SocialLeaderboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q75 0 127.5-52.5T660 716q0-75-52.5-127.5T480 536q-75 0-127.5 52.5T300 716q0 75 52.5 127.5T480 896ZM363 484q20-11 42.5-17.5T451 458L350 256H250l113 228Zm234 0 114-228H610L509 458q23 2 45.5 8.5T597 484ZM256 848q-17-29-26.5-62.5T220 716q0-36 9.5-69.5T256 584q-42 14-69 49.5T160 716q0 47 27 82.5t69 49.5Zm448 0q42-14 69-49.5t27-82.5q0-47-27-82.5T704 584q17 29 26.5 62.5T740 716q0 36-9.5 69.5T704 848ZM480 976q-40 0-76.5-11.5T336 933q-9 2-18 2.5t-19 .5q-91 0-155-64T80 717q0-87 58-149t143-69L149 234q-10-20 1.5-39t34.5-19h166q23 0 41.5 12t29.5 32l58 116 58-116q11-20 29.5-32t41.5-12h166q23 0 34.5 19t1.5 39L680 497q85 8 142.5 70T880 716q0 92-64 156t-156 64q-9 0-18.5-.5T623 933q-31 20-67 31.5T480 976Zm0-260ZM363 484 250 256l113 228Zm234 0 114-228-114 228ZM449 747l-49-22q-6-3-6-9t6-9l49-22 22-49q3-6 9-6t9 6l22 49 49 22q6 3 6 9t-6 9l-49 22-22 49q-3 6-9 6t-9-6l-22-49Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboard.displayName = 'AmauiIconMaterialSocialLeaderboard';

export default IconMaterialSocialLeaderboard;
