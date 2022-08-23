import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderSharpW100'
      short_name='CreateNewFolder'

      {...props}
    >
      <path d="M14.65 15.35H15.35V13.35H17.35V12.65H15.35V10.65H14.65V12.65H12.65V13.35H14.65ZM3.3 18.7V6.3H11L12 7.3H20.7V18.7ZM4 18H20V8H11.725L10.725 7H4ZM4 18V7V8Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderSharpW100.displayName = 'AmauiIconMaterialCreateNewFolderSharpW100';

export default IconMaterialCreateNewFolderSharpW100;
