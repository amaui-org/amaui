import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharpW100'
      short_name='Edit'

      {...props}
    >
      <path d="M5.4 19H6.375L16.65 8.725L15.675 7.75L5.4 18.025ZM18.15 8.225 16.175 6.25 17.85 4.575 19.825 6.55ZM4.7 19.7V17.725L15.675 6.75L17.65 8.725L6.675 19.7ZM16.15 8.225 15.675 7.75 16.65 8.725Z"/>
    </Icon>
  );
});

IconMaterialEditSharpW100.displayName = 'AmauiIconMaterialEditSharpW100';

export default IconMaterialEditSharpW100;
