import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsSharpW100Filled'
      short_name='TableRows'

      {...props}
    >
      <path d="M4.3 19.7V15.125H19.7V19.7ZM4.3 14.425V9.575H19.7V14.425ZM4.3 8.875V4.3H19.7V8.875Z"/>
    </Icon>
  );
});

IconMaterialTableRowsSharpW100Filled.displayName = 'AmauiIconMaterialTableRowsSharpW100Filled';

export default IconMaterialTableRowsSharpW100Filled;
