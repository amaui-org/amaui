import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharpW100Filled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11L12 7.3H20.475V8H4V17.95H4.5L6.875 10H22.825L20.225 18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenSharpW100Filled.displayName = 'AmauiIconMaterialFolderOpenSharpW100Filled';

export default IconMaterialFolderOpenSharpW100Filled;
