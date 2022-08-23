import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffSharpW100'
      short_name='FolderOff'

      {...props}
    >
      <path d="M20.7 17.875 20 17.175V8H11.725L10.725 7H9.825L9.125 6.3H11L12 7.3H20.7ZM20.9 21.9 17.7 18.7H3.3V6.3H5.3L3.1 4.1L3.6 3.6L21.4 21.4ZM4 18H16.975L5.975 7H4ZM11.55 12.575ZM14.95 12.125Z"/>
    </Icon>
  );
});

IconMaterialFolderOffSharpW100.displayName = 'AmauiIconMaterialFolderOffSharpW100';

export default IconMaterialFolderOffSharpW100;
