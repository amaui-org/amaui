import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagW100'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-416h28v-120h164l-48-64 48-64H396v248ZM252-198v-590h456v590l-228-98.33L252-198Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagW100.displayName = 'AmauiIconMaterialBookmarkFlagW100';

export default IconMaterialBookmarkFlagW100;
