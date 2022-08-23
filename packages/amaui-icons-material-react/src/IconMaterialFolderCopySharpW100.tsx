import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopySharpW100'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M2.3 19.4V8.7H3V18.7H18.75V19.4ZM5 16.7V3.3H12L13 4.3H21.7V16.7ZM5.7 16H21V5H12.725L11.725 4H5.7ZM5.7 16V4V5V16Z"/>
    </Icon>
  );
});

IconMaterialFolderCopySharpW100.displayName = 'AmauiIconMaterialFolderCopySharpW100';

export default IconMaterialFolderCopySharpW100;
