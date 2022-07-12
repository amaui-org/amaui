import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharpW100Filled'
      short_name='Edit'

      {...props}
    >
      <path d="M18.15 8.225 16.175 6.25 17.85 4.575 19.825 6.55ZM4.7 19.7V17.725L15.675 6.75L17.65 8.725L6.675 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialEditSharpW100Filled;
