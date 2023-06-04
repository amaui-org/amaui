import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBack'

      short_name='PhotoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-4 4V5h5.15L9 3h6l1.85 2H22v16Zm2-2h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBack.displayName = 'AmauiIconMaterialPhotoCameraBack';

export default IconMaterialPhotoCameraBack;
