import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewSharpW100Filled'
      short_name='GridView'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11ZM4.3 19.7V13H11V19.7ZM13 11V4.3H19.7V11ZM13 19.7V13H19.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialGridViewSharpW100Filled;
