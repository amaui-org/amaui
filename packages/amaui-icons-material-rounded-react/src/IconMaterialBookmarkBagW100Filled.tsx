import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkBagW100Filled'

      short_name='BookmarkBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442.93-399q9.07 0 15.07-5.95t6-15.05v-8h31v8q0 9.1 5.93 15.05 5.93 5.95 15 5.95t15.07-5.95q6-5.95 6-15.05v-8.02q13.6 0 22.8-9.22 9.2-9.22 9.2-22.85v-128.28q0-13.63-9.2-22.63-9.2-9-22.8-9h-6v-42q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2h-39q-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v42h-6q-13.6 0-22.8 9.22-9.2 9.22-9.2 22.85v128.3q0 13.63 9.2 22.69t22.8 9.06v7.88q0 9.1 5.93 15.05 5.93 5.95 15 5.95ZM456-620v-46h47v46h-47Zm24 324-144 62q-30 13-57-4.76-27-17.75-27-50.24v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32.49-27 50.24Q654-221 624-234l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkBagW100Filled.displayName = 'AmauiIconMaterialBookmarkBagW100Filled';

export default IconMaterialBookmarkBagW100Filled;
