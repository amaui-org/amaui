import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSharp'
      short_name='Edit'

      {...props}
    >
      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6ZM19.3 8.925 15.05 4.725 17.875 1.9 22.1 6.125ZM3 21V16.75L13.6 6.15L17.85 10.4L7.25 21ZM14.325 9.675 13.625 8.975 15.025 10.375Z"/>
    </Icon>
  );
});

export default IconMaterialEditSharp;
