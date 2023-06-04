import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGraphicEq = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEq'

      short_name='GraphicEq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"/>
    </Icon>
  );
});

IconMaterialGraphicEq.displayName = 'AmauiIconMaterialGraphicEq';

export default IconMaterialGraphicEq;
