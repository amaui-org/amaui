import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100'

      short_name='FolderCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.4V8.7H3v10h15.75v.7ZM5 16.7V3.3h7l1 1h8.7v12.4Zm.7-.7H21V5h-8.275l-1-1H5.7Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100.displayName = 'AmauiIconMaterialFolderCopyW100';

export default IconMaterialFolderCopyW100;
