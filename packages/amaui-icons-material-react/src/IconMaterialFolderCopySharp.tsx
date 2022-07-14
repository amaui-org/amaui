import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopySharp'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M1 21V6H3V19H20V21ZM5 17V2H12L14 4H23V17ZM7 15H21V6H13.175L11.175 4H7ZM7 15V4V6V15Z"/>
    </Icon>
  );
});

export default IconMaterialFolderCopySharp;
