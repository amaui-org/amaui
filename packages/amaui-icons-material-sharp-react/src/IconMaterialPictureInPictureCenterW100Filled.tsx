import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureCenterW100Filled'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm196-156h304v-224H328v224Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenterW100Filled.displayName = 'AmauiIconMaterialPictureInPictureCenterW100Filled';

export default IconMaterialPictureInPictureCenterW100Filled;
