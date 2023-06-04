import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAlt'

      short_name='PictureInPictureAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h8v-6h-8Zm-9 3V4h20v16Zm2-2V6Zm0 0h16V6H4Zm9-3v-2h4v2Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAlt.displayName = 'AmauiIconMaterialPictureInPictureAlt';

export default IconMaterialPictureInPictureAlt;
