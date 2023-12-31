import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureCenterW100Filled'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm166-156h244q13 0 21.5-8.5T632-398v-164q0-13-8.5-21.5T602-592H358q-13 0-21.5 8.5T328-562v164q0 13 8.5 21.5T358-368Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureCenterW100Filled.displayName = 'AmauiIconMaterialPictureInPictureCenterW100Filled';

export default IconMaterialPictureInPictureCenterW100Filled;
