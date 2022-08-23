import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharp'
      short_name='Folder'

      {...props}
    >
      <path d="M2 4H10L12 6H22V20H2ZM4 6V18H20V8H11.175L9.175 6ZM4 18V6V8V18Z"/>
    </Icon>
  );
});

IconMaterialFolderSharp.displayName = 'AmauiIconMaterialFolderSharp';

export default IconMaterialFolderSharp;
