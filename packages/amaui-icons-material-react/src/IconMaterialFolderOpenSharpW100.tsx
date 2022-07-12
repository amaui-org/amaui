import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharpW100'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11L12 7.3H20.475V8H11.725L10.725 7H4V17.95H4.5L6.875 10H22.825L20.225 18.7ZM5.225 18H19.7L21.875 10.7H7.4ZM5.225 18 7.4 10.7 5.225 18ZM4 8V7V8Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenSharpW100;
