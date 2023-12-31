import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMobileW100Filled'

      short_name='PictureInPictureMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-132H212v-696h536v696Zm-70-324v-304H454v304h224Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobileW100Filled.displayName = 'AmauiIconMaterialPictureInPictureMobileW100Filled';

export default IconMaterialPictureInPictureMobileW100Filled;
