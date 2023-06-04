import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100Filled'

      short_name='PictureInPictureAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 17H19v-5.6h-7.6Zm-8.1 1.7V5.3h17.4v13.4Zm11.9-4.5Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100Filled.displayName = 'AmauiIconMaterialPictureInPictureAltW100Filled';

export default IconMaterialPictureInPictureAltW100Filled;
