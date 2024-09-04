import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStarW100Filled'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m407-428 73-44 73 44-20-83 65-56-85-7-33-78-33 78-85 7 65 56-20 83ZM252-198v-590h456v590l-228-98-228 98Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStarW100Filled.displayName = 'AmauiIconMaterialBookmarkStarW100Filled';

export default IconMaterialBookmarkStarW100Filled;
