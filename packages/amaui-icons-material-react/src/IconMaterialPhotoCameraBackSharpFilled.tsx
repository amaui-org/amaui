import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackSharpFilled'
      short_name='PhotoCameraBack'

      {...props}
    >
      <path d="M6 17H18L14.25 12L11.25 16L9 13ZM2 21V5H7.15L9 3H15L16.85 5H22V21Z"/>
    </Icon>
  );
});

export default IconMaterialPhotoCameraBackSharpFilled;
