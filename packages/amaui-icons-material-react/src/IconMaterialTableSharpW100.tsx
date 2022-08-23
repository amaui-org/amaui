import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableSharpW100'
      short_name='Table'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM5 9.2H19V5H5ZM9.9 14.1H14.1V9.9H9.9ZM9.9 19H14.1V14.8H9.9ZM5 14.1H9.2V9.9H5ZM14.8 14.1H19V9.9H14.8ZM5 19H9.2V14.8H5ZM14.8 19H19V14.8H14.8Z"/>
    </Icon>
  );
});

IconMaterialTableSharpW100.displayName = 'AmauiIconMaterialTableSharpW100';

export default IconMaterialTableSharpW100;
