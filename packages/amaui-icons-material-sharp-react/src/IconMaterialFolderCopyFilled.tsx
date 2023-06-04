import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyFilled'

      short_name='FolderCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V6h2v13h17v2Zm4-4V2h7l2 2h9v13Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyFilled.displayName = 'AmauiIconMaterialFolderCopyFilled';

export default IconMaterialFolderCopyFilled;
