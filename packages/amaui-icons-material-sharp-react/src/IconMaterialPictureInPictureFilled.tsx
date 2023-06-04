import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureFilled'

      short_name='PictureInPicture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13h8V7h-8Zm-9 7V4h20v16Zm13-10Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureFilled.displayName = 'AmauiIconMaterialPictureInPictureFilled';

export default IconMaterialPictureInPictureFilled;
