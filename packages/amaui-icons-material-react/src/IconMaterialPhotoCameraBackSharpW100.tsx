import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackSharpW100'
      short_name='PhotoCameraBack'

      {...props}
    >
      <path d="M7.95 16.35H16.25L13.7 12.95L11.2 16.05L9.6 14.2ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackSharpW100.displayName = 'AmauiIconMaterialPhotoCameraBackSharpW100';

export default IconMaterialPhotoCameraBackSharpW100;
