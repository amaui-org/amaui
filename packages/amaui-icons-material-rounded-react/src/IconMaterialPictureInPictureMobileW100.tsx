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
      <path d="M748-192q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Zm-28 0v-576q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22Zm0-608H240h480Zm-42 314v-244q0-13-8.5-21.5T648-760H484q-13 0-21.5 8.5T454-730v244q0 13 8.5 21.5T484-456h164q13 0 21.5-8.5T678-486Zm-28 2H482v-248h168v248Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureMobileW100.displayName = 'AmauiIconMaterialPictureInPictureMobileW100';

export default IconMaterialPictureInPictureMobileW100;
