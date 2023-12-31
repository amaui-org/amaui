import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureLarge'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320v-400h480v400H240ZM80-160v-80h720v-560h80v640H80Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureLarge.displayName = 'AmauiIconMaterialPictureInPictureLarge';

export default IconMaterialPictureInPictureLarge;
