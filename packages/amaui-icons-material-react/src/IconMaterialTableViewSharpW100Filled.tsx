import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableViewSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableViewSharpW100Filled'
      short_name='TableView'

      {...props}
    >
      <path d="M8.3 19.7V8.3H19.7V19.7ZM9 11.85H19V9H9ZM12.55 15.45H15.45V12.55H12.55ZM12.55 19H15.45V16.15H12.55ZM9 15.45H11.85V12.55H9ZM16.15 15.45H19V12.55H16.15ZM9 19H11.85V16.15H9ZM16.15 19H19V16.15H16.15ZM4.3 15.7V4.3H15.7V7.3H15V5H5V15H7.3V15.7Z"/>
    </Icon>
  );
});

IconMaterialTableViewSharpW100Filled.displayName = 'AmauiIconMaterialTableViewSharpW100Filled';

export default IconMaterialTableViewSharpW100Filled;
