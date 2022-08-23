import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextureRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureRoundedW100'
      short_name='Texture'

      {...props}
    >
      <path d="M5.025 19.475Q4.85 19.4 4.725 19.275Q4.6 19.15 4.525 18.975L18.975 4.525Q19.15 4.6 19.275 4.725Q19.4 4.85 19.475 5.025ZM4.3 13.175V12.175L12.175 4.3H13.175ZM4.3 6.15V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H6.15ZM17.85 19.7 19.7 17.85V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM10.825 19.7 19.7 10.825V11.825L11.825 19.7Z"/>
    </Icon>
  );
});

IconMaterialTextureRoundedW100.displayName = 'AmauiIconMaterialTextureRoundedW100';

export default IconMaterialTextureRoundedW100;
