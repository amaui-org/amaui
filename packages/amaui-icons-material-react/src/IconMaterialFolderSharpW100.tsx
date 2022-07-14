import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharpW100'
      short_name='Folder'

      {...props}
    >
      <path d="M3.3 6.3H11L12 7.3H20.7V18.7H3.3ZM4 7V18H20V8H11.725L10.725 7ZM4 18V7V8V18Z"/>
    </Icon>
  );
});

export default IconMaterialFolderSharpW100;
