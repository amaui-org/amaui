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
      <path d="M7 18V6h2v12Zm4 4V2h2v20Zm-8-8v-4h2v4Zm12 4V6h2v12Zm4-4v-4h2v4Z"/>
    </Icon>
  );
});

IconMaterialGraphicEq.displayName = 'AmauiIconMaterialGraphicEq';

export default IconMaterialGraphicEq;
