import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkHeartW100'

      short_name='BookmarkHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-625q-10-12-25.5-19t-32.5-7q-29 0-49.5 21T352-580q0 15 4 28t18 30q11 15 31.5 35.5T458-437q5 5 10.5 6.5T480-429q6 0 11.5-1.5T502-437q32-29 51.5-49t31.5-35q14-17 18.5-30.5T608-580q0-29-20.5-50T538-651q-17 0-32.5 7T480-625Zm0 329-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm0-32 155 67q16 7 30.5-3t14.5-27v-437q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkHeartW100.displayName = 'AmauiIconMaterialBookmarkHeartW100';

export default IconMaterialBookmarkHeartW100;
