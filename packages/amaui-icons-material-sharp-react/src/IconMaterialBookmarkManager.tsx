import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManager = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManager'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h320l80 80h400v192h-80V416H160v400h320v80H80Zm652-219 43 43-155 154v42h42l155-154 42 42-172 172H560V849l172-172Zm127 127L732 677l86-86 127 127-86 86ZM160 416v442-442Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManager.displayName = 'AmauiIconMaterialBookmarkManager';

export default IconMaterialBookmarkManager;
