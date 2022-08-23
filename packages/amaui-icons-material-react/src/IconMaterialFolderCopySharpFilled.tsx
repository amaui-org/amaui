import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopySharpFilled'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M1 21V6H3V19H20V21ZM5 17V2H12L14 4H23V17Z"/>
    </Icon>
  );
});

IconMaterialFolderCopySharpFilled.displayName = 'AmauiIconMaterialFolderCopySharpFilled';

export default IconMaterialFolderCopySharpFilled;
