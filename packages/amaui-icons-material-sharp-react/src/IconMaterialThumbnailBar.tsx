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
      <path d="M80 896V256h800v640H80Zm320-80h400V336H400v480Zm-80 0V336H160v480h160Zm-160 0V336v480Zm160 0h80-80Zm0-480h80-80Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBar.displayName = 'AmauiIconMaterialThumbnailBar';

export default IconMaterialThumbnailBar;
