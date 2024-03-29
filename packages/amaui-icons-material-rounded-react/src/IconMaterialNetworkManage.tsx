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
      <path d="M373 767q17-11 35.5-18t38.5-10q-5 19-8 38t-3 39q0 24 3.5 47t11.5 44l-81-82q-12-13-11.5-30t14.5-28Zm107-271q49 0 96 10.5t90 30.5q-44 8-81.5 29T517 618q-9-1-18.5-1.5T480 616q-49 0-94 14t-85 41q-21 14-46.5 14T212 667q-18-18-16.5-43.5T217 583q57-42 124-64.5T480 496Zm0-240q119 0 230.5 40T913 412q20 17 21.5 42.5T918 498q-18 18-43 17.5T830 499q-75-60-164-91.5T480 376q-97 0-186 31.5T130 499q-20 16-45 16.5T42 498q-18-18-16.5-43.5T47 412q91-76 202.5-116T480 256Zm188 700q-12-5-22.5-10.5T624 932l-29 9q-13 4-25.5-1T550 924l-8-14q-7-12-5-26t13-23l22-19q-2-12-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T668 676l6-29q3-14 13.5-22.5T712 616h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T816 700l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 12 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T772 956l-6 29q-3 14-13.5 22.5T728 1016h-16q-14 0-24.5-9T674 984l-6-28Zm52-220q-33 0-56.5 23.5T640 816q0 33 23.5 56.5T720 896q33 0 56.5-23.5T800 816q0-33-23.5-56.5T720 736Z"/>
    </Icon>
  );
});

IconMaterialNetworkManage.displayName = 'AmauiIconMaterialNetworkManage';

export default IconMaterialNetworkManage;
