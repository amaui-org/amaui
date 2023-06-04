import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltFilled'

      short_name='PictureInPictureAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h8v-6h-8Zm-9 3V4h20v16Zm13-6Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltFilled.displayName = 'AmauiIconMaterialPictureInPictureAltFilled';

export default IconMaterialPictureInPictureAltFilled;
