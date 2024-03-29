import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkManage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkManage'

      short_name='NetworkManage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M339 794q22-22 49.5-36t58.5-19q-5 19-8 38t-3 39q0 24 3.5 47t11.5 44L339 794Zm-85-84-84-86q62-62 142-95t168-33q49 0 96 10.5t90 30.5q-44 8-81.5 29T517 618q-9-1-18.5-1.5T480 616q-64 0-122.5 24.5T254 710ZM84 540 0 456q95-97 219.5-148.5T480 256q136 0 260.5 51.5T960 456l-84 84q-79-79-181.5-121.5T480 376q-112 0-214.5 42.5T84 540Zm676 76 12 60q12 5 22.5 10.5T816 700l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772 956l-12 60h-80l-12-60q-12-5-22.5-10.5T624 932l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668 676l12-60h80Zm-40 120q-33 0-56.5 23.5T640 816q0 33 23.5 56.5T720 896q33 0 56.5-23.5T800 816q0-33-23.5-56.5T720 736Z"/>
    </Icon>
  );
});

IconMaterialNetworkManage.displayName = 'AmauiIconMaterialNetworkManage';

export default IconMaterialNetworkManage;
