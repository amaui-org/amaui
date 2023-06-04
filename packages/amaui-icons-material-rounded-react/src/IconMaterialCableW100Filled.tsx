import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableW100Filled'

      short_name='Cable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20.35q-.15 0-.25-.1t-.1-.25v-1.15H4q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1h1.65V7q0-1.4.975-2.375Q7.6 3.65 9 3.65t2.375.975Q12.35 5.6 12.35 7v10q0 1.125.763 1.887.762.763 1.887.763t1.888-.763q.762-.762.762-1.887V8.85H16q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1h.65V4q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25v1.15H20q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1h-1.65V17q0 1.4-.975 2.375-.975.975-2.375.975t-2.375-.975Q11.65 18.4 11.65 17V7q0-1.125-.763-1.888Q10.125 4.35 9 4.35t-1.887.762Q6.35 5.875 6.35 7v8.15H8q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1h-.65V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCableW100Filled.displayName = 'AmauiIconMaterialCableW100Filled';

export default IconMaterialCableW100Filled;
