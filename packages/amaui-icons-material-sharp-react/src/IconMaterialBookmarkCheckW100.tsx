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
      <path d="m438-437 161-161-20-20-141 142-57-57-20 20 77 76ZM252-198v-590h456v590l-228-98-228 98Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkCheckW100.displayName = 'AmauiIconMaterialBookmarkCheckW100';

export default IconMaterialBookmarkCheckW100;
