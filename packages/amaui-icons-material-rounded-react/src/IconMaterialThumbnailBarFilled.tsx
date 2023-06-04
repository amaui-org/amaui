import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarFilled'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h160v640H160Zm240 0V256h400q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H400Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarFilled.displayName = 'AmauiIconMaterialThumbnailBarFilled';

export default IconMaterialThumbnailBarFilled;
