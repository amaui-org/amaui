import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagFilled'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-400h60v-120h180l-60-80 60-80H380v280ZM200-120v-720h560v720L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagFilled.displayName = 'AmauiIconMaterialBookmarkFlagFilled';

export default IconMaterialBookmarkFlagFilled;
