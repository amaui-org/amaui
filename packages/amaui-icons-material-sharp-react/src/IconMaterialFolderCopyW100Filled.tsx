import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100Filled'

      short_name='FolderCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.4V8.7H3v10h15.75v.7ZM5 16.7V3.3h7l1 1h8.7v12.4Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100Filled.displayName = 'AmauiIconMaterialFolderCopyW100Filled';

export default IconMaterialFolderCopyW100Filled;
