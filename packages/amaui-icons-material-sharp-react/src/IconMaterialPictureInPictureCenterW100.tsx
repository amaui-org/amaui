import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureCenterW100'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Zm168-128h304v-224H328v224Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenterW100.displayName = 'AmauiIconMaterialPictureInPictureCenterW100';

export default IconMaterialPictureInPictureCenterW100;
