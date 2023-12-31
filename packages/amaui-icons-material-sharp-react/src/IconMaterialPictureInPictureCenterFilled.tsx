import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureCenterFilled'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm240-200h320v-240H320v240Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenterFilled.displayName = 'AmauiIconMaterialPictureInPictureCenterFilled';

export default IconMaterialPictureInPictureCenterFilled;
