import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100'

      short_name='PictureInPictureAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 17H19v-5.6h-7.6Zm-8.1 1.7V5.3h17.4v13.4ZM4 18V6Zm0 0h16V6H4Zm8.1-1.7v-4.2h6.2v4.2Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100.displayName = 'AmauiIconMaterialPictureInPictureAltW100';

export default IconMaterialPictureInPictureAltW100;
