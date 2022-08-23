import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGraphicEqTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqTwoTone'
      short_name='GraphicEq'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"/>
    </Icon>
  );
});

IconMaterialGraphicEqTwoTone.displayName = 'AmauiIconMaterialGraphicEqTwoTone';

export default IconMaterialGraphicEqTwoTone;
