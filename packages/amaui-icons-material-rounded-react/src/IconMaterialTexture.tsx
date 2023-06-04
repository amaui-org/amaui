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
      <path d="M4.475 20.925q-.475-.1-.887-.512-.413-.413-.513-.888l16.45-16.45q.525.125.9.512.375.388.525.888ZM3 14.7v-2.8L11.9 3h2.8ZM3 7V5q0-.825.587-1.413Q4.175 3 5 3h2Zm14 14 4-4v2q0 .825-.587 1.413Q19.825 21 19 21Zm-7.7 0L21 9.3v2.8L12.1 21Z"/>
    </Icon>
  );
});

IconMaterialTexture.displayName = 'AmauiIconMaterialTexture';

export default IconMaterialTexture;
