import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGraphicEqW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEqW100Filled'

      short_name='GraphicEq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17.35q-.15 0-.25-.1t-.1-.25V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10q0 .15-.1.25t-.25.1Zm4 4q-.15 0-.25-.1t-.1-.25V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v18q0 .15-.1.25t-.25.1Zm-8-8q-.15 0-.25-.1t-.1-.25v-2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2q0 .15-.1.25t-.25.1Zm12 4q-.15 0-.25-.1t-.1-.25V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10q0 .15-.1.25t-.25.1Zm4-4q-.15 0-.25-.1t-.1-.25v-2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialGraphicEqW100Filled.displayName = 'AmauiIconMaterialGraphicEqW100Filled';

export default IconMaterialGraphicEqW100Filled;
