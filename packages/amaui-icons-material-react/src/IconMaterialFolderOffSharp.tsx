import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffSharp'
      short_name='FolderOff'

      {...props}
    >
      <path d="M22 19.175 20 17.175V8H11.175L9.175 6H8.825L6.825 4H10L12 6H22ZM20.475 23.3 17.175 20H2V4.825L0.7 3.5L2.1 2.1L21.9 21.9ZM4 18H15.175L4 6.825ZM9.65 12.475ZM14.45 11.625Z"/>
    </Icon>
  );
});

IconMaterialFolderOffSharp.displayName = 'AmauiIconMaterialFolderOffSharp';

export default IconMaterialFolderOffSharp;
