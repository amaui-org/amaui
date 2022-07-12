import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharpW700'
      short_name='Edit'

      {...props}
    >
      <path d="M5.225 19.025H6.225L14.6 10.625L13.6 9.625L5.225 18.025ZM19.4 9.2 15.025 4.85 17.925 1.925 22.4 6.225ZM2.825 21.4V17.025L13.575 6.275L17.975 10.65L7.225 21.4ZM14.125 10.125 13.6 9.625 14.6 10.625Z"/>
    </Icon>
  )
});

export default IconMaterialEditSharpW700;
