import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureSharpFilled'
      short_name='Texture'

      {...props}
    >
      <path d="M3.075 20.925V19.525L19.525 3.075H20.95V4.475L4.475 20.925ZM3 14.7V11.9L11.9 3H14.7ZM3 7V3H7ZM17 21 21 17V21ZM9.3 21 21 9.3V12.1L12.1 21Z"/>
    </Icon>
  );
});

IconMaterialTextureSharpFilled.displayName = 'AmauiIconMaterialTextureSharpFilled';

export default IconMaterialTextureSharpFilled;
