import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSharpW100Filled'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M11.4 12.6H19V7H11.4ZM3.3 18.7V5.3H20.7V18.7ZM15.2 9.8Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSharpW100Filled.displayName = 'AmauiIconMaterialPictureInPictureSharpW100Filled';

export default IconMaterialPictureInPictureSharpW100Filled;
