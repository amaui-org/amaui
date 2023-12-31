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
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm200-200h240q17 0 28.5-11.5T640-400v-160q0-17-11.5-28.5T600-600H360q-17 0-28.5 11.5T320-560v160q0 17 11.5 28.5T360-360Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenterFilled.displayName = 'AmauiIconMaterialPictureInPictureCenterFilled';

export default IconMaterialPictureInPictureCenterFilled;
