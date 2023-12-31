import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmall'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-80h720v-560h80v640H80Zm320-160v-240h320v240H400Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmall.displayName = 'AmauiIconMaterialPictureInPictureSmall';

export default IconMaterialPictureInPictureSmall;
