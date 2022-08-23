import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureSharpW100Filled'
      short_name='Texture'

      {...props}
    >
      <path d="M4.525 19.475V18.975L18.975 4.525H19.475V5.025L5.025 19.475ZM4.3 13.175V12.175L12.175 4.3H13.175ZM4.3 6.15V4.3H6.15ZM17.85 19.7 19.7 17.85V19.7ZM10.825 19.7 19.7 10.825V11.825L11.825 19.7Z"/>
    </Icon>
  );
});

IconMaterialTextureSharpW100Filled.displayName = 'AmauiIconMaterialTextureSharpW100Filled';

export default IconMaterialTextureSharpW100Filled;
