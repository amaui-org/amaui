import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltSharp'
      short_name='PictureInPictureAlt'

      {...props}
    >
      <path d="M11 17H19V11H11ZM2 20V4H22V20ZM4 18V6ZM4 18H20V6H4ZM13 15V13H17V15Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltSharp.displayName = 'AmauiIconMaterialPictureInPictureAltSharp';

export default IconMaterialPictureInPictureAltSharp;
