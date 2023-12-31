import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureMobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureMobileW100'

      short_name='PictureInPictureMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-132H212v-696h536v696Zm-28-28v-640H240v640h480Zm0-640H240h480Zm-42 344v-304H454v304h224Zm-28-28H482v-248h168v248Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobileW100.displayName = 'AmauiIconMaterialPictureInPictureMobileW100';

export default IconMaterialPictureInPictureMobileW100;
