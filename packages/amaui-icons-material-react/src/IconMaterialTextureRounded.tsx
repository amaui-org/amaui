import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureRounded'
      short_name='Texture'

      {...props}
    >
      <path d="M4.475 20.925Q4 20.825 3.588 20.413Q3.175 20 3.075 19.525L19.525 3.075Q20.05 3.2 20.425 3.587Q20.8 3.975 20.95 4.475ZM3 14.7V11.9L11.9 3H14.7ZM3 7V5Q3 4.175 3.587 3.587Q4.175 3 5 3H7ZM17 21 21 17V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM9.3 21 21 9.3V12.1L12.1 21Z"/>
    </Icon>
  );
});

IconMaterialTextureRounded.displayName = 'AmauiIconMaterialTextureRounded';

export default IconMaterialTextureRounded;
