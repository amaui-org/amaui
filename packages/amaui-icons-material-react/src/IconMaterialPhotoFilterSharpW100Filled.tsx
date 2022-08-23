import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterSharpW100Filled'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M4.3 19.7V4.3H15.2V5H5V19H19V8.8H19.7V19.7ZM12 15.05 11.05 12.95 8.95 12 11.05 11.05 12 8.95 12.95 11.05 15.05 12 12.95 12.95ZM17.2 8.975 16.5 7.525 15.05 6.825 16.5 6.125 17.2 4.675 17.9 6.125 19.35 6.825 17.9 7.525Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterSharpW100Filled.displayName = 'AmauiIconMaterialPhotoFilterSharpW100Filled';

export default IconMaterialPhotoFilterSharpW100Filled;
