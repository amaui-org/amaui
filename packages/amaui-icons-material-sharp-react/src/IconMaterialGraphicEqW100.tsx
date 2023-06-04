import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGraphicEqW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqW100'

      short_name='GraphicEq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 17.35V6.65h.7v10.7Zm4 4V2.65h.7v18.7Zm-8-8v-2.7h.7v2.7Zm12 4V6.65h.7v10.7Zm4-4v-2.7h.7v2.7Z"/>
    </Icon>
  );
});

IconMaterialGraphicEqW100.displayName = 'AmauiIconMaterialGraphicEqW100';

export default IconMaterialGraphicEqW100;
