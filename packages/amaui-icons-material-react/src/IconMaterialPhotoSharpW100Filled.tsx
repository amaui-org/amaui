import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSharpW100Filled'
      short_name='Photo'

      {...props}
    >
      <path d="M7.95 16.35H16.25L13.7 12.95L11.2 16.05L9.6 14.2ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoSharpW100Filled.displayName = 'AmauiIconMaterialPhotoSharpW100Filled';

export default IconMaterialPhotoSharpW100Filled;
