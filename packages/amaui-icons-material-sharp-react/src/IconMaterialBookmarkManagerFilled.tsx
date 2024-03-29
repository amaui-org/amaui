import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerFilled'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 976v-85l206-207 86 84-207 208h-85Zm321-236-85-85 56-56 85 85-56 56ZM80 896V256h320l80 80h400v116L443 896H80Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerFilled.displayName = 'AmauiIconMaterialBookmarkManagerFilled';

export default IconMaterialBookmarkManagerFilled;
