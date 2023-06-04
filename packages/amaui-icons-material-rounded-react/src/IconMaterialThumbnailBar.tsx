import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBar'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm240-80h400V336H400v480Zm-80 0V336H160v480h160Zm-160 0V336v480Zm160 0h80-80Zm0-480h80-80Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBar.displayName = 'AmauiIconMaterialThumbnailBar';

export default IconMaterialThumbnailBar;
