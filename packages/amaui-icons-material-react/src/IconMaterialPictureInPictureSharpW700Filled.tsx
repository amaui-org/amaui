import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharpW700Filled'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M10.7 13.3H18.7V7.3H10.7ZM1.15 20.85V3.15H22.85V20.85ZM14.7 10.3Z"/>
    </Icon>
  )
});

export default IconMaterialPictureInPictureSharpW700Filled;
