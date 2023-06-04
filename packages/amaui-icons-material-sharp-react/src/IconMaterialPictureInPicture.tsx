import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPicture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPicture'

      short_name='PictureInPicture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13h8V7h-8Zm-9 7V4h20v16Zm2-2V6Zm0 0h16V6H4Zm9-7V9h4v2Z"/>
    </Icon>
  );
});

IconMaterialPictureInPicture.displayName = 'AmauiIconMaterialPictureInPicture';

export default IconMaterialPictureInPicture;
