import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTexture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Texture'

      short_name='Texture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.075 20.925v-1.4l16.45-16.45h1.425v1.4L4.475 20.925ZM3 14.7v-2.8L11.9 3h2.8ZM3 7V3h4Zm14 14 4-4v4Zm-7.7 0L21 9.3v2.8L12.1 21Z"/>
    </Icon>
  );
});

IconMaterialTexture.displayName = 'AmauiIconMaterialTexture';

export default IconMaterialTexture;
