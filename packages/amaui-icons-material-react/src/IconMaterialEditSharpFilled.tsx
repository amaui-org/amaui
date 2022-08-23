import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharpFilled'
      short_name='Edit'

      {...props}
    >
      <path d="M19.3 8.925 15.05 4.725 17.875 1.9 22.1 6.125ZM3 21V16.75L13.6 6.15L17.85 10.4L7.25 21Z"/>
    </Icon>
  );
});

IconMaterialEditSharpFilled.displayName = 'AmauiIconMaterialEditSharpFilled';

export default IconMaterialEditSharpFilled;
