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
      <path d="m438-437 161-161-20-20-141 142-57-57-20 20 77 76ZM252-198v-590h456v590l-228-98-228 98Z"/>
    </Icon>
  );
});

IconMaterialBookmarkCheckW100Filled.displayName = 'AmauiIconMaterialBookmarkCheckW100Filled';

export default IconMaterialBookmarkCheckW100Filled;
