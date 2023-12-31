import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMediumW100Filled'

      short_name='PictureInPictureMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-340v-304h384v304H316ZM132-212v-28h668v-508h28v536H132Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMediumW100Filled.displayName = 'AmauiIconMaterialPictureInPictureMediumW100Filled';

export default IconMaterialPictureInPictureMediumW100Filled;
