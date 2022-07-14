import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharpFilled'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M11 13H19V7H11ZM2 20V4H22V20ZM15 10Z"/>
    </Icon>
  );
});

export default IconMaterialPictureInPictureSharpFilled;
