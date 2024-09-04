import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagW100Filled'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-416h28v-120h164l-48-64 48-64H396v248ZM252-198v-590h456v590l-228-98.33L252-198Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagW100Filled.displayName = 'AmauiIconMaterialBookmarkFlagW100Filled';

export default IconMaterialBookmarkFlagW100Filled;
