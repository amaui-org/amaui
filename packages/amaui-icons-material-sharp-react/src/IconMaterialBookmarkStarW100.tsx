import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStarW100'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m407-428 73-44 73 44-20-83 65-56-85-7-33-78-33 78-85 7 65 56-20 83ZM252-198v-590h456v590l-228-98-228 98Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStarW100.displayName = 'AmauiIconMaterialBookmarkStarW100';

export default IconMaterialBookmarkStarW100;
