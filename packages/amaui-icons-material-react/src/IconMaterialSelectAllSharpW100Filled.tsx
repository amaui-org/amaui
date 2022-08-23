import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectAllSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllSharpW100Filled'
      short_name='SelectAll'

      {...props}
    >
      <path d="M4.3 5V4.3H5V5ZM4.3 13V11H5V13ZM7 19.7V19H9V19.7ZM4.3 9V7H5V9ZM11 5V4.3H13V5ZM19 5V4.3H19.7V5ZM4.3 19.7V19H5V19.7ZM4.3 17V15H5V17ZM7 5V4.3H9V5ZM11 19.7V19H13V19.7ZM19 13V11H19.7V13ZM19 19.7V19H19.7V19.7ZM19 8.75V6.75H19.7V8.75ZM19 17.25V15.25H19.7V17.25ZM15 19.7V19H17V19.7ZM15 5V4.3H17V5ZM8.3 15.7V8.3H15.7V15.7ZM9 15H15V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAllSharpW100Filled.displayName = 'AmauiIconMaterialSelectAllSharpW100Filled';

export default IconMaterialSelectAllSharpW100Filled;
