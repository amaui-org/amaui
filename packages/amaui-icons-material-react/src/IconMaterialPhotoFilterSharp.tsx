import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterSharp'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M3 21V3H14V5H5V19H19V10H21V21ZM12 16 10.75 13.25 8 12 10.75 10.75 12 8 13.25 10.75 16 12 13.25 13.25ZM17 10 16.05 7.95 14 7 16.05 6.05 17 4 17.95 6.05 20 7 17.95 7.95Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterSharp.displayName = 'AmauiIconMaterialPhotoFilterSharp';

export default IconMaterialPhotoFilterSharp;
