import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkCheckW100Filled'

      short_name='BookmarkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-476-47-47q-4-4-10-4t-10 4q-4 4-4 10t4 10l45 45q9 9 21.5 9t21.5-9l130-130q4-4 4.5-9.5T589-608q-4-4-10-4t-10 4L438-476Zm42 180-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkCheckW100Filled.displayName = 'AmauiIconMaterialBookmarkCheckW100Filled';

export default IconMaterialBookmarkCheckW100Filled;
