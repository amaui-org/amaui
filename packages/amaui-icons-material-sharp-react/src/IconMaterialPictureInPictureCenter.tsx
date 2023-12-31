import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureCenter'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm160-120h320v-240H320v240Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenter.displayName = 'AmauiIconMaterialPictureInPictureCenter';

export default IconMaterialPictureInPictureCenter;
