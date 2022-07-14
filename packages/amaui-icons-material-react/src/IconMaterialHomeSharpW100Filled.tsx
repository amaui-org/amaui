import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharpW100Filled'
      short_name='Home'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575L18.7 9.65V19.7H13.75V13.5H10.25V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialHomeSharpW100Filled;
