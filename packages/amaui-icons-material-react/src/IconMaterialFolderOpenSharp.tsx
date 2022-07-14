import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharp'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M2 20V4H10L12 6H22V8H11.175L9.175 6H4V18L6.4 10H23.5L20.5 20ZM6.1 18H19L20.8 12H7.9ZM6.1 18 7.9 12 6.1 18ZM4 8V6V8Z"/>
    </Icon>
  );
});

export default IconMaterialFolderOpenSharp;
