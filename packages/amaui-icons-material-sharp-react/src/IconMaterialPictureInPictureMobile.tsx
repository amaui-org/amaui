import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMobile'

      short_name='PictureInPictureMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Zm-40 360v-320H440v320h240Zm-80-80h-80v-160h80v160Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobile.displayName = 'AmauiIconMaterialPictureInPictureMobile';

export default IconMaterialPictureInPictureMobile;
