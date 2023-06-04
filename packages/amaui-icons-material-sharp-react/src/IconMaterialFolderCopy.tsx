import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopy'

      short_name='FolderCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V6h2v13h17v2Zm4-4V2h7l2 2h9v13Zm2-2h14V6h-7.825l-2-2H7Zm0 0V4v11Z"/>
    </Icon>
  );
});

IconMaterialFolderCopy.displayName = 'AmauiIconMaterialFolderCopy';

export default IconMaterialFolderCopy;
