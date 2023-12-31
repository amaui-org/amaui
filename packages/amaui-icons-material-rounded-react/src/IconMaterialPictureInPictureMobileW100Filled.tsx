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
      <path d="M748-192q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Zm-70-294v-244q0-13-8.5-21.5T648-760H484q-13 0-21.5 8.5T454-730v244q0 13 8.5 21.5T484-456h164q13 0 21.5-8.5T678-486Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobileW100Filled.displayName = 'AmauiIconMaterialPictureInPictureMobileW100Filled';

export default IconMaterialPictureInPictureMobileW100Filled;
