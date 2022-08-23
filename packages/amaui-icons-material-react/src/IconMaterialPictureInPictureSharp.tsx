import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharp'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M11 13H19V7H11ZM2 20V4H22V20ZM4 18V6ZM4 18H20V6H4ZM13 11V9H17V11Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSharp.displayName = 'AmauiIconMaterialPictureInPictureSharp';

export default IconMaterialPictureInPictureSharp;
