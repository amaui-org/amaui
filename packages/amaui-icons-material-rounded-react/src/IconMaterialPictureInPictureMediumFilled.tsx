import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMediumFilled'

      short_name='PictureInPictureMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320q-17 0-28.5-11.5T320-360v-240q0-17 11.5-28.5T360-640h320q17 0 28.5 11.5T720-600v240q0 17-11.5 28.5T680-320H360ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMediumFilled.displayName = 'AmauiIconMaterialPictureInPictureMediumFilled';

export default IconMaterialPictureInPictureMediumFilled;
