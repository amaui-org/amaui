import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharpW100'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M11.4 12.6H19V7H11.4ZM3.3 18.7V5.3H20.7V18.7ZM4 18V6ZM4 18H20V6H4ZM12.1 11.9V7.7H18.3V11.9Z"/>
    </Icon>
  );
});

export default IconMaterialPictureInPictureSharpW100;
