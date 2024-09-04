import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkHeartW100Filled'

      short_name='BookmarkHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-625q-9.84-12.19-25.42-19.09Q439-651 421.6-651q-28.47 0-49.04 20.9Q352-609.21 352-580.27q0 15.27 4 28.27t18 30q11.38 14.82 31.69 35.41Q426-466 458.07-436.86q4.93 4.86 10.49 6.36 5.57 1.5 11.5 1.5 5.94 0 11.44-1.5 5.5-1.5 10.55-6.48Q534-466 553.5-486q19.5-20 31.24-34.83Q599-538 603.5-551.31q4.5-13.32 4.5-28.64Q608-609 587.32-630q-20.68-21-49.32-21-16.92 0-32.62 6.91-15.71 6.9-25.38 19.09Zm0 329-144 62q-30 13-57-4.76-27-17.75-27-50.24v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32.49-27 50.24Q654-221 624-234l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkHeartW100Filled.displayName = 'AmauiIconMaterialBookmarkHeartW100Filled';

export default IconMaterialBookmarkHeartW100Filled;
