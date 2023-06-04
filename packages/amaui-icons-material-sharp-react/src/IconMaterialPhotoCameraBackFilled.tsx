import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackFilled'

      short_name='PhotoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-4 4V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackFilled.displayName = 'AmauiIconMaterialPhotoCameraBackFilled';

export default IconMaterialPhotoCameraBackFilled;
