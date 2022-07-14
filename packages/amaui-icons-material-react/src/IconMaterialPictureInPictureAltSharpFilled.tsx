import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltSharpFilled'
      short_name='PictureInPictureAlt'

      {...props}
    >
      <path d="M11 17H19V11H11ZM2 20V4H22V20ZM15 14Z"/>
    </Icon>
  );
});

export default IconMaterialPictureInPictureAltSharpFilled;
