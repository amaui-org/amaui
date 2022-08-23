import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableViewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewSharp'
      short_name='TableView'

      {...props}
    >
      <path d="M7 21V7H21V21ZM9 11H19V9H9ZM13 15H15V13H13ZM13 19H15V17H13ZM9 15H11V13H9ZM17 15H19V13H17ZM9 19H11V17H9ZM17 19H19V17H17ZM3 17V3H17V6H15V5H5V15H6V17Z"/>
    </Icon>
  );
});

IconMaterialTableViewSharp.displayName = 'AmauiIconMaterialTableViewSharp';

export default IconMaterialTableViewSharp;
