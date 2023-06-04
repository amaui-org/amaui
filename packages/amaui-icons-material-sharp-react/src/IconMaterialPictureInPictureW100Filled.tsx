import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureW100Filled'

      short_name='PictureInPicture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 12.6H19V7h-7.6Zm-8.1 6.1V5.3h17.4v13.4Zm11.9-8.9Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureW100Filled.displayName = 'AmauiIconMaterialPictureInPictureW100Filled';

export default IconMaterialPictureInPictureW100Filled;
