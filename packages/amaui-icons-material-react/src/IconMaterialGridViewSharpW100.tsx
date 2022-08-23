import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewSharpW100'
      short_name='GridView'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11ZM4.3 19.7V13H11V19.7ZM13 11V4.3H19.7V11ZM13 19.7V13H19.7V19.7ZM5 10.3H10.3V5H5ZM13.7 10.3H19V5H13.7ZM13.7 19H19V13.7H13.7ZM5 19H10.3V13.7H5ZM13.7 10.3ZM13.7 13.7ZM10.3 13.7ZM10.3 10.3Z"/>
    </Icon>
  );
});

IconMaterialGridViewSharpW100.displayName = 'AmauiIconMaterialGridViewSharpW100';

export default IconMaterialGridViewSharpW100;
