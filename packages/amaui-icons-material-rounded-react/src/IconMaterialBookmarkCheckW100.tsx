import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkCheckW100'

      short_name='BookmarkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-476-47-47q-4-4-10-4t-10 4q-4 4-4 10t4 10l45 45q9 9 21.5 9t21.5-9l130-130q4-4 4.5-9.5T589-608q-4-4-10-4t-10 4L438-476Zm42 180-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm0-32 155 67q16 7 30.5-3t14.5-27v-437q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkCheckW100.displayName = 'AmauiIconMaterialBookmarkCheckW100';

export default IconMaterialBookmarkCheckW100;
